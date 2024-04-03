# fakeOS

## DEMO

![demo of project](demo.gif)

## MVP

* You will be creating an SPA (Single Page Application)
* Desktop has a wallpaper that fits the viewport
* There will be selectable icons
* Selecting an icon will open an "app", creating a modal to display some content
* Able to close an app
* There will be a selectable menu
* Selecting the menu will display a list of text and icons
* The current time is displayed somewhere

## Design Goals 

- Clone of macOS Monterey (V12.5)

## Features
- Styling based on macOS Monterey (V12.5)
- Responsible on a range of different view ports
- Dropdown menu when Apple logo in Page Banner is clicked
- Digital clock in Page Banner (right)
- Docker horizontal menu with functional links
- Page icons in a vertical arrangement also rendered with functional links
- Photo Viewer modal - distinct albums with unique file(s) that display a photo when clicked
- Calculator modal 
- Notes modal - can add or delete notes. Reset when session re-loads

## Issues

- I had originally added the modals through js modifying of index innerHTML. However, I have changed the project such that all the modals are hard-coded into index.html. This way I can alter their display through hiding the root modal element. 
- Configuring the modal functionality with code that is injected through innerHTML injected from js files didn’t always register when referincing them by ID. The DOM content had loaded, however the js logic file just wasn’t registering the injected code when scanning the HTML.
- For the Calculator Modal, I’ve used eval() which I’ve since learned is deprecated due to security risks. This is due to the ability of eval to execute any code passed to it as a String.

## Future Goals
 
- Use local storage API for the Notes Modal so that it can be used functionally and not reset after every session
- Add a basic info modal that is shown when ‘About This Mac’ is clicked in the page banner.
- Re-do calculator functionality without eval()
- Make the yellow and green modal buttons have a minimise and enlarge size functionality (respectively) instead of currently where they all have close-modal functionality



