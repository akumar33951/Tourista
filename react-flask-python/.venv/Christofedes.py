# discrete project final version
import sys


def tsp(places):

    n = len(places)

    # build a graph
    G = build_graph(places, n)
    print("Graph: ", G)

    # build a minimum spanning tree
    MSTree = minimum_spanning_tree(G, n)
    print("MSTree: ", MSTree)

    # find odd vertexes
    odd_vertexes = find_odd_vertexes(MSTree)
    print("Odd vertexes in MSTree: ", odd_vertexes)

    # add minimum weight matching edges to MST
    minimum_weight_matching(MSTree, G, odd_vertexes)
    print("Minimum weight matching: ", MSTree)

    # find an eulerian tour
    eulerian_tour = find_eulerian_tour(MSTree, G)

    print("Eulerian tour: ", eulerian_tour)

    current = eulerian_tour[0]
    path = [current]
    visited = [False] * len(eulerian_tour)
    # updated, initially there was 0 inplace of current
    visited[current] = True

    length = 0

    # skip the already visited place(vertex) from eulerian tour
    # to get the hamiltonion circuit
    # hence to get the resultant best path for the trip
    for v in eulerian_tour[1:]:
        if not visited[v]:
            path.append(v)
            visited[v] = True

            length += G[current][v]
            current = v

    length += G[current][path[0]]
    path.append(path[0])

    print("Result path: ", path)
    print("Result length of the path: ", length)

    return length, path


# func to build gragh
def build_graph(places, n):
    from geopy.geocoders import Nominatim
    from geopy.distance import geodesic

    # define the which map_agent you want to use
    geolocator = Nominatim(
        user_agent="https://maps.googleapis.com/maps/api/geocode")

    # declare place_location
    # to store latitude, longitude of each place

    # find latitute and longitudee of each place
    # location = geolocator.geocode(places[n-1]["name"])
    # places[n-1]["lat"] = location.latitude
    # places[n-1]["long"] = location.longitude

    for place in places:
        if place["lat"] == "not given" or place["long"] == "not given":
            location = geolocator.geocode(place["name"])
            place["lat"] = location.latitude
            place["long"] = location.longitude

    graph = []

    for i in range(n):
        graph.append([])

        for j in range(n):
            graph[i].append(geodesic((places[i]["lat"], places[i]["long"]),
                            (places[j]["lat"], places[j]["long"])).km)

    return graph


# import sys to use maxsize

# A utility function to find the vertex with
# minimum distance value, from the set of vertices
# not yet included in shortest path tree

def minKey(G, key, mstSet, n):
    # Initilaize min value
    min = sys.maxsize  # maxint

    for v in range(n):
        if key[v] < min and mstSet[v] == False:
            min = key[v]
            min_index = v

    return min_index


# func to find minimum spanning tree
def minimum_spanning_tree(G, n):

    # Key values used to pick minimum weight edge in cut
    key = [sys.maxsize] * n
    parent = [None] * n  # Array to store constructed MST
    # Make key 0 so that this vertex is picked as first vertex
    key[n-1] = 0
    mstSet = [False] * n

    parent[n-1] = -1  # First node is always the root of MST
    MST = []

    for cout in range(n):

        # Pick the minimum distance vertex from
        # the set of vertices not yet processed.
        # u is always equal to src in first iteration
        u = minKey(G, key, mstSet, n)

        if cout != 0:
            MST.append((parent[u], u))

        # Put the minimum distance vertex in
        # the shortest path tree
        mstSet[u] = True

        # Update dist value of the adjacent vertices
        # of the picked vertex only if the current
        # distance is greater than new distance and
        # the vertex in not in the shotest path tree
        for v in range(n):

            # graph[u][v] is non zero only for adjacent vertices of m
            # mstSet[v] is false for vertices not yet included in MST
            # Update the key only if graph[u][v] is smaller than key[v]
            if G[u][v] > 0 and mstSet[v] == False and key[v] > G[u][v]:
                key[v] = G[u][v]
                parent[v] = u

    # return MST
    return MST


# Func to find Odd vertexes of MST
def find_odd_vertexes(MST):
    tmp_g = {}
    vertexes = []

    for edge in MST:
        if edge[0] not in tmp_g:
            tmp_g[edge[0]] = 0

        if edge[1] not in tmp_g:
            tmp_g[edge[1]] = 0

        tmp_g[edge[0]] += 1
        tmp_g[edge[1]] += 1

    for vertex in tmp_g:
        if tmp_g[vertex] % 2 == 1:
            vertexes.append(vertex)

    return vertexes


# func to find minimum weight perfect matching
def minimum_weight_matching(MST, G, odd_vert):
    import random
    random.shuffle(odd_vert)

    while odd_vert:
        v = odd_vert.pop()
        length = float("inf")
        u = 1
        closest = 0

        for u in odd_vert:
            if v != u and G[v][u] < length:
                length = G[v][u]
                closest = u

        MST.append((v, closest))
        odd_vert.remove(closest)


def find_eulerian_tour(MatchedMSTree, G):
    # find neigbours
    neighbours = {}
    for edge in MatchedMSTree:
        if edge[0] not in neighbours:
            neighbours[edge[0]] = []

        if edge[1] not in neighbours:
            neighbours[edge[1]] = []

        neighbours[edge[0]].append(edge[1])
        neighbours[edge[1]].append(edge[0])

    # print("Neighbours: ", neighbours)

    # finds the hamiltonian circuit
    # start_vertex = MatchedMSTree[0][0]
    # EP = [neighbours[start_vertex][0]]
    EP = [MatchedMSTree[0][0]]

    while len(MatchedMSTree) > 0:
        for i, v in enumerate(EP):
            if len(neighbours[v]) > 0:
                break

        while len(neighbours[v]) > 0:
            w = neighbours[v][0]

            remove_edge_from_matchedMST(MatchedMSTree, v, w)

            del neighbours[v][(neighbours[v].index(w))]
            del neighbours[w][(neighbours[w].index(v))]

            i += 1
            EP.insert(i, w)

            v = w

    return EP


def remove_edge_from_matchedMST(MatchedMST, v1, v2):

    for i, item in enumerate(MatchedMST):
        if (item[0] == v2 and item[1] == v1) or (item[0] == v1 and item[1] == v2):
            del MatchedMST[i]

    return MatchedMST


def tour_key(tour_type):
    print("Enter", tour_type, "name:")
    name = input()

    return name


def place_list(choice):
    return {
        1: dict_of_places[tour_key("state").lower()],
        2: dict_of_places[tour_key("country").lower()],
        3: dict_of_places["international"],
    }[choice]


if __name__ == "__main__":

    places = [
        {"name": "India Gate", "latitude": 28.613100353808562,
            "longitude": 77.22947751119564},
        {"name": "Jama Masjid", "latitude": 28.65085807084567,
            "longitude": 77.23352792839935},
        {"name": "AksharDham Temple", "latitude": 28.612965458588324,
            "longitude": 77.27724044003227},
        {"name": "Lotus Temple", "latitude": 28.553623916979646,
            "longitude": 77.25877275352109},
        {"name": "Hauz khas Village", "latitude": 28.553204392672402,
            "longitude": 77.19335589987115},
        {"name": "new delhi railway station",
            "latitude": "not given", "longitude": "not given"},
    ]

    # find the best path for the tour of given places
    # from the given starting point
    length, path = tsp(places)

    # print the best path and its length
    print("Best Tour is:")
    for i in path:
        print(places[i]["name"], end="->")

    print("\nTour Length is => ", length)