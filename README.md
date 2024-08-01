# WheresMyFlight

WheresMyFlight is a cross-platform application that allows users to track their flights in real-time. The application is built using framework7 and compiled using Apache cordova. The app uses internal Flightstats/Cirium APIs, United APIs, Delta APIs, and seatmaps.com for its functionality.

## Repos
Unfortunately this project is currently not a monorepo.
| Project       | Repo Link                                                                   |
|---------------|-----------------------------------------------------------------------------|
| Frontend      | [CoolCoderSJ/WheresMyFlight](https://github.com/CoolCoderSJ/WheresMyFlight) |
| Update Server | [CoolCoderSJ/WMF-Server](https://github.com/CoolCoderSJ/WMF-Server)         |
| Demo Website  | [CoolCoderSJ/WMF-Website](https://github.com/CoolCoderSJ/WMF-Website)       |
| Wear OS       | [CoolCoderSJ/WMFWear](https://github.com/CoolCoderSJ/WMFWear)               |

## Usage
- iOS: The app can be found on the app store [here](https://apple.com) (not yet published)
- Android: The app is not on the Play Store, but can be downloaded using the APK file found in the releases tab.
- Web: The app can be accessed [here](https://flights.shuchir.dev) in the browser as well. It is not required to install the app.
- WearOS: The apk can be downloaded from the releases tab and can be installed via ADB.

## Features
- Track flights in real-time
  - Get live updates on the flight's status via text messages or ntfy push notifications.
- Rich flight information
  - View a flight's gate times, runway times, terminal/gate numbers, baggage carousel number, speed, altitude, live position, distance, and more from the app. 
- Live positional tracking
  - See exactly where your plane is and how much it has left to go.
- Boarding passes
  - Convert paper boarding passes to digital ones (tested) and store them in the app. Alternatively, you can import your digital boarding passes from your flight's app using just a screenshot. 
- Seatmaps
  - View the seatmap of your flight and see rich details for each seat before you board.
- Itinerary
  - View your entire trip's itinerary in one place- See flight details as well as layover times automatically when you create a trip.
- Offline Access
  - Lost internet connection? No problem! The app stores all your flight data offline and syncs it when you're back online.
- Multiple Notification Targets
  - Keep family members in the loop by sending them updates on your flight's status as well.
- Track your bags
  - Get notified when your bags are loaded onto the plane and when they are unloaded, as well as when they reach the baggage carousel. Only for Delta and United flights.

## Development
- The frontend, this repository, is built using Framework7 and compiled using Apache Cordova. It communicates with a custom server as well as an Appwrite instance for user data.
- The backend, the server, is built using Python. More info can be found [here](https://github.com/CoolCoderSJ/WMF-Server).

The server is currently not setup for self-hosting. Please contact me if you would like to self-host.

## Screenshots
![image](https://sharex.shuchir.dev/u/WdnrG4.png)
![image](https://sharex.shuchir.dev/u/C5B6tc.png)
![image](https://sharex.shuchir.dev/u/txgeoM.png)
![image](https://sharex.shuchir.dev/u/Gvj2X3.png)
![image](https://sharex.shuchir.dev/u/zJR1Ao.png)
![image](https://sharex.shuchir.dev/u/C6Exs3.png)
![image](https://sharex.shuchir.dev/u/9DIeqk.png)
