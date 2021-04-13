# exercise

for continent in continents: 
    if continent[0] == 'A':  #only print continents that begin with the letter "A"
        print("* " + continent)

    

all_restaurants = [
    "Taco City",
    "Burgertown",
    "Tacovilla",
    "Hotdog station",
    "House of tacos",
]

def tacos_only(restaurants):
    taco_joints = restaurants.copy()
    for taco_joint in taco_joints.copy():
        if "taco" not in taco_joint.lower():
            taco_joints.remove(taco_joint)
    return taco_joints

dinner_options = tacos_only(all_restaurants)

# Why do you think the author used the copy method in the for loop here:
    # modifying a list while looping through it is discouraged as it will produce unexpected result,
    # this code is looping through a copy and then modifying the original
    
    
    
turtles = [
    "Michelangelo",
    "Leonardo",
    "Raphael",
    "Donatello",
]

def shredder(names):
    if len(names) >= 1:
        names[0] = "Bebop"

shredder(turtles)

for turtle in turtles:
    print("* " + turtle)
    
#     What would the output be?
#     * Bebop
#     * Leonardo
#     * Raphael
#     * Donatello
    #Lists are mutable and that shredder method changed the list!
 
