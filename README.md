This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Onafgemaakte POP app met behulp van react and redux

Na het maken van de AJAX contact app met behulp van jquery and php/mysql was ik op zoek na een nieuwe uitdaging en een framework dat het mogelijk maakt om grotere apps te bouwen zonder de overzicht kwijt te raken.
Ik heb wat onderzoek gedaan naar mvc frameworks and heb uiteindelijk voor react/redux gekozen vanwegen zijn populariteit en zijn goede documentatie. 
Als eerste stap heb ik een todo app nagebouwd. http://blog.theodo.fr/2016/03/getting-started-with-react-redux-and-immutable-a-test-driven-tutorial-part-1/
Deze tutorial heeft me een boel geleerd over de basis van react en redux, over test-driven development over webapp and es-6 syntax.
Tegelijk heb ik een plan ontworpen voor het fuctioneren van de app:

Screen 1:
Verkennen van de situatie - Sterke punten en uitdagingen
Als eerste stap van de POP wordt de realiteit in kaart gebracht.
De gebruiker maakt als eerste stap twee lijsten, van zijn sterke punten op die hij kan bouwen en van punten waarop hij kan verbeteren.
De twee lijsten zijn functioneel gezien twee todo-lists, maar dan zonder de opties om af te vinken, etc.

Screen 2:
Verkennen van kansen en valkuilen
De gebruiker maakt twee lijsten, een van de kansen en een van de valkuilen, beiden baserend op de sterke punten en uitdagingen die eerder in kaart zijn gebracht.
Functioneel gezien vergelijkbar met screen1, met toevoeging van presentatie componenten die de lijsten van screen1 weergeven. Verder is een fuctionaliteit nodig die het mogelijk maakt van screen1 naar screen2 te wisselen.

Screen3:
Akties defineren
De gebruiker maakt todolists gebaseerd op de kansen en valkuilen die eerder in kaart zijn gebracht. Elke todo bevat de volgende informatie: Doel, hulp en leermiddelen, meetlat voor success en deadline
Functioneel gezien moet de todolist uitgebreidt worden met 'hulp en leermiddelen', 'meetlat voor success' en 'deadline'.

Screen4:
Dashboard
Overzicht van realiteit (sterke punten, uitdagingen en kansen valkuilen)
Overzicht van todos geordend naar deadline

Dat ik dit niet helemaal af zou krijgen was me vantevoren wel duidelijk. Mijn bedoeling was om de principes van een react/redux applicatie te leren en zoveel mogelijk fuctionaliteit te itegreren.

Voor mij nieuwe technologien in dit project waren onder andere:
- Webpack
- ES6 syntax: arrow functions, const, let, map, constructor functions, bind(), spread operator
- mocha and unit testing
- React
- Redux
- Immutable
- Reselect

Proces

sessie1:
hello world in react.js
react.js tutorial tictactoe

sessie2:
redux webpack tutorial. Oplossen van foutmeldingen, incompatibele versies van packets veranderingen van de webpack API en win/osx verschillen... 3-4 uur later...
hello world in react-redux-webpack

sessie3:
tutorial mvc-react-redux part1
componenten schrijven
tests schrijven
functionailteit schrijven

sessie4:
tutorial mvc-react-redux-part2:
interactiviteit: redux opzetten
reducer functies,
actions defineren

sessie5:
Debugged wrong itemId when editItem and cancelEdit by following the value through the app
Find bug that caused unit tests not to appear
Analyzed app structure and decide to build further on todo app from redux documentation: https://redux.js.org/docs/basics/ExampleTodoList.html

sessie6:
build todo list example from redux docs
sessie7: understand the syntax and redux API from todo list example
sessie8, sessie9: build 2nd todo list: figure out store initialization in reducers, passing listId props to lists and via actions to reducers, using listId to target the the right piece of the store, configuring mapStateToProps, figuring out selectors with re-reselect

Right now I got two todolists working independently from each other, the basic functionality of screen1

Use 'npm start' in cmd to start
