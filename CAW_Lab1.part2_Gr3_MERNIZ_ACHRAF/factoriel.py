def fact(n):
    if n == 1 or n == 0:  
        return 1
    else:
        return n * fact(n - 1)  

n = int(input("Entrer un nombre pour calculer sa factorielle: "))
print(f"Le factorielle de {n} est {fact(n)}")
