### Project Road map

- [x] user authentication
- [x] backend first deployment
- [x] Documenting already done apis with swagger
- [ ] Work on Authorization, They are some apis that are needed by some parts of app but not others
- [ ] Customer recording on entrance
- [ ] Orders and Bookings
- [ ] Employees management
- [ ] User reviews Management
- [ ] Hotels properties Management
- [ ] Service Payment Processing and Managements


- Orders
 - Model
   - user(customer)
   - order_details
   - date_created

- Booking
 - Model (bed rooms,conference rooms)
   - user
   - date_created
   - number_rooms
   - date of depature
   - date of arrival
   - number of adults
   - number of children
   - booking_type (bed rooms,conference rooms)


 - Rooms
   - Model
      - Room name
      - status (BOOKED,ACTIVE,IDLE)
      - description
      - room_type (bed room,conference)
