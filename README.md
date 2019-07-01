# Hollow Knight RESTful Api 

## Description 

This project is a RESTful api for the bosses, friendly NPCs, and locations from the critically acclaimed game Hollow Knight. It is a relational database utilizing a one-to-many relationship. The app was built with Node and Express, and is deployed to Heroku at [https://hollow-knight.herokuapp.com/api/v1/hollow-knight/]

## Resource Lists 

#### GET /api/v1/hollow-knight/bosses

#### List of Bosses
| Name        | Description                                       | Type   |
| ------------|:-------------------------------------------------:| ----:  |
| `id`          | The identifier for the boss                       | `number` |
| `name`        | The name  of the boss                             | `string` |
| `image`       | A link to an image of the boss                    | `string` | 
|`location_id` | The identifier of the location of the boss        | `number` |

#### GET /api/v1/hollow-knight/friendly-npcs

#### List of Friendly Npcs 
| Name        | Description                                       | Type   |
| ------------|:-------------------------------------------------:| ----:  |
| `id`          | The identifier for the friendly npc               | `number` |
| `name`        | The name  of the friendly npc                     | `string` |
| `image`     | A link to an image of the boss                    | `string` | 
| `location_id` | The identifier of the location of the npc         | `number` |

#### GET /api/v1/hollow-knight/locations

#### List of Locations
| Name        | Description                                       | Type   |
| ------------|:-------------------------------------------------:| ----:  |
| `id`          | The identifier for location                       | `number` |
| `name`        | The name  of the location                         | `string` |
| `image`       | A link to an image of the location                | `string` | 

## Specific Resource 

### GET /api/v1/hollow-knight/bosses/{id}

| Name        | Description                                       | Type   |
| ------------|:-------------------------------------------------:| ----:  |
| `id`          | The identifier for the boss                       | `number` |
| `name`        | The name  of the boss                             | `string` |
| `image`       | A link to an image of the boss                    | `string` | 
| `location_id` | The identifier of the location of the boss        | `number` |

### GET /api/v1/hollow-knight/friendly-npcs/{id}

| Name        | Description                                       | Type   |
| ------------|:-------------------------------------------------:| ----:  |
| `id`          | The identifier for the friendly npc               | `number` |
| `name`        | The name  of the friendly npc                     | `string` |
| `image`       | A link to an image of the boss                    | `string` | 
| `location_id` | The identifier of the location of the npc         | `number` |

### GET /api/v1/hollow-knight/locations/{id}

| Name        | Description                                       | Type   |
| ------------|:-------------------------------------------------:| ----:  |
| `id`          | The identifier for location                       | `number` |
| `name`        | The name  of the location                         | `string` |
| `image`       | A link to an image of the location                | `string` | 


## Create

### POST /api/v1/hollow-knight/bosses/

| Name | Description                                    | Type    |
|------|:----------------------------------------------:|--------:|
| `name`| Name of the boss                              | `string`|
| `image`| Link to an image of the boss                 | `string`|
| `location`| Name of the location the boss is found in | `string`|

### POST /api/v1/hollow-knight/friendly-npcs/

| Name | Description                                    | Type    |
|------|:----------------------------------------------:|--------:|
| `name`| Name of the friendly npc                      | `string`|
| `image`| Link to an image of the friendly npc         | `string`|
| `location`| Name of the location the npc is found in  | `string`|

### POST /api/v1/hollow-knight/locations/

| Name | Description                                    | Type    |
|------|:----------------------------------------------:|--------:|
| `name`| Name of the location                          | `string`|
| `image`| Link to an image of the location             | `string`|


## Delete 

#### DELETE /api/v1/hollow-knight/bosses/{id}

#### DELETE /api/v1/hollow-knight/friendly-npcs/{id}

#### DELETE /api/v1/hollow-knight/locations/{id}


## Technologies used
* Knex 
* PostgreSQL
* Node
* Express 
* Heroku 







