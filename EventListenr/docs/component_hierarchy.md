## Component Hierarchy

### Frontend Routes
|Path   | Component   |
|-------|-------------|
| "/login" | "AuthFormContainer" |
| "/sign-in" | "SignUp" |
| "/" | "HomeContainer" |
| "/events/:eventId" | "EventsShowContainer" |
| "/user/events/" | "NewEventFormContainer" |
| "/user/bookmarks/" | "BookmarkContainer" |
| "/user/tickets" | "TicketContainer" |

**AuthFormContainer**
* AuthFormContainer

**UserContainer**
* TicketContainer
* BookmarkContainer
  * BookmarkDetails

**UserDetailContainer**
* UserDetail

**HomeContainer**
* Home
* EventsIndexContainer
* CategoriesContainer

**NavBarContainer**
* NavBar
* Auth

**EventsIndexContainer**
* EventIndexItems
   * Title
   * Description
   * Location
   * Date
   * Time
   * Categories

**EventDetailContainer**
* EventDetailList
  * EventDetailInfo
    * Date
    * Title
    * Organizer
    * TicketPrice
  * Description
  * EventDetails
    * Location
    * Date
    * Time
  * Categories
* CartContainer

**TicketsContainer**
* Tickets

**NewEventFormContainer**
* NewEventForm

**CategoriesIndexContainer**
* CategoryIndex

**CategoryDetailContainer**
* CategoryDetail
* EventIndexContainer
