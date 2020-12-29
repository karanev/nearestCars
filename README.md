# nearestCars

API endpoints:

1. getCurrentDriverLocation - /drivers/location

Sample Request: ```localhost:3000/drivers/location?id=5feadfbde114687dc202f4c4```

id = <driver's id> in request params

```
Sample Response:
{
    "data": [
        77.230003,
        28.610001
    ]
}
```

where data is coordinates

2. getNearestDrivers - /drivers/nearest

Sample Request: ```localhost:3000/drivers/nearest?latitude=28.610001&longitude=77.230000```

```
Sample Response:
{
    "data": [
        {
            "location": {
                "coordinates": [
                    77.230003,
                    28.610001
                ],
                "type": "Point"
            },
            "_id": "5feadfbde114687dc202f4c4",
            "name": "Sam"
        }
    ]
}
```

## Approach:
Using GeoJSON points in MongoDB to store coordinates of drivers. And using '2dsphere' index to optimally query closest drivers.

I have hosted the DB on Mongo Cloud. So, don't need to setup it.
This is just a kind of POC. Otherwise, we should have used websockets for realtime updation of drivers location and tracking a driver,
events for reconnecting websockets, db upon disconnection and many more things like choosing the best algo for querying the closest cars by
doing a POC to compare them.

Platform: Node.js, MongoDB

To Run the application:
```npm run start```
