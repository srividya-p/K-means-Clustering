import math

def distance(x, y, p):
    d = 0
    for xi, yi in zip(x, y):
        d += (abs(float(xi)-float(yi)))**p
    return math.sqrt(d)
