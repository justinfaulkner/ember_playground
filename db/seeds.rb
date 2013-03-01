# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
tables = Table.create(
	[{
	    name: "One"
	}, {
	    name: "Two"
	}, {
	    name: "Three"
	}, {
	    name: "Four"
	}, {
	    name: "Five"
	}, {
	    name: "Six"
	}]
)

foods = Food.create(
	[{
    id: 1,
    name: 'Pizza',
    image_url: 'pizza.png',
    cents: 1500
	}, {
	  id: 2,
    name: 'Pancakes',
    image_url: 'pancakes.png',
    cents: 300
	}, {
    id: 3,
    name: 'Fries',
    image_url: 'fries.png',
    cents: 700
	}, {
    id: 4,
    name: 'Hot Dog',
    image_url: 'hotdog.png',
    cents: 950
	}, {
    id: 5,
    name: 'Birthday Cake',
    image_url: 'birthdaycake.png',
    cents: 2000
	}]
)
#   Mayor.create(name: 'Emanuel', city: cities.first)
