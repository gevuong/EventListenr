## Component Hierarchy

### Frontend Routes
|Path   | Component   |
|-------|-------------|
| "/login" | "AuthFormContainer" |
| "/signin" | "SignUp" |
| "/" | "HomeContainer" |
| "/events/:eventId" | "EventsShowContainer" |
| "/events/new" | "NewEventFormContainer" |
| "/profile" | "TicketAndBookmarkContainer" |

<!-- | "/user/bookmarks/" | "BookmarkContainer" | - store beside
| "/user/tickets" | "TicketContainer" | -->
incorporate the sign in, signup, and login routes

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
