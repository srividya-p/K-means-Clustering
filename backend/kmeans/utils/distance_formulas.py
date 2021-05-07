def euclidian_distance(x, y):
    d = 0
    for xi, yi in zip(x, y):
        d += (float(xi)-float(yi))**2
    return math.sqrt(d)


def manhattan_distance(x, y):
    d = 0
    for xi, yi in zip(x, y):
        d += abs(float(xi)-float(yi))
    return d