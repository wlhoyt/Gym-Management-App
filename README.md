# Candor-Renewed
This project is a rewrite of our senior design project from CS495. Our understanding on how Android studios activities
and fragments worked led to complications at the end of the project. I reached out to previous team members to see if 
they would be interested in fixing our past mistakes. 

Our changes to the project will be a full rewrite of the app.

### Original Concept
Following the original idea that is located on the webpage, we wanted:
- Payment Management
  * Paying dues
  * Allowing purchases from the store
- Scheduling
  * Personal Trainer 
  * Classes 
- Attendace Tracking
  * Monitoring Class Attendace
  * Gym capacity
- Inter-Member Communication
  * Message or Messaging board feed between users
- Merchandise Management
  * Store Inventory
  * Deals and Sales

### Final Sprint Completed Functions
- Scheduling 
  * Classes
- Attendace Tracking
  * Monitoring Class Attendace
- Merchandise Management
  * Store Inventory

### Major Changes
- Will be changing the apps foundation from Android studio to React Native
- Will be changing the coding language from Java to Python for backend functionality

### UML Images/ Design Images
Admin UML\
![Admin Version Layout](https://github.com/wlhoyt/Gym-Management-App/blob/main/adminLayout.PNG)

Member UML\
![Member Version Layout](https://github.com/wlhoyt/Gym-Management-App/blob/main/memberLayout.PNG)

UI/UX Rough Layout\
The three vertical lines indicate a hidden side menu button.\
![ui-ux Layout](https://github.com/wlhoyt/Gym-Management-App/blob/main/ui-uxLayout.PNG)

# Goals For the Rewrite
- [ ] Setup Database for Scheduling Classes and Private Sessions with trainers (Dates, Remaining Spots, Max Capcity ,
Currently Attending, Decriptions, and Trainer's Name) 
- [ ] Setup Database for Members (Name, Age, Sex, and Days Until Membership Expires)
- [ ] Setup Database for Store (Item Name, Remaining Stock, Restock Max Size, Sale Price, Current Price, and Image)  
- [X] Setup Initial Layout of the app for the UI
- [ ] Add NFC for Attendance Tracking for classes and the overall gym capacity
- [X] Research possiblities for creating messaging between multiple users and implementing if possible
* https://medium.com/geekculture/a-simple-way-to-build-a-mobile-chat-app-with-react-native-gifted-chat-203a6fad63a5
* This communication was streamlined in React Native compared to Android Studio when the project was first created. 
- [ ] Setup Notifications (Sales, Classes Reminders, and Out of Stock)
