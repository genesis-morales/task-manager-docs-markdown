# Functional Requirements (FRs)

## FR-1: User Authentication & Authorization

- Users can register with email and password
- Users can log in and receive JWT token
- Passwords must be securely hashed (bcrypt)
- Session management with token expiration
- Password reset via email
- Email verification for new accounts

## FR-2: Project Management

- Users can create projects with name, description, and color
- Users can view all their projects in a list
- Users can update project details
- Users can archive/unarchive projects
- Users can delete projects (with confirmation)
- Deleted projects should cascade delete associated tasks

## FR-3: Task Management

- Users can create tasks within projects
- Tasks must have: title, optional description, status, optional due date
- Users can update task details
- Users can change task status (drag-and-drop on kanban)
- Users can set task priority
- Users can delete tasks
- Tasks can be reordered within status columns

## FR-4: Dashboard & Visualization

- Display task summary by status (counts)
- Show upcoming tasks (next 7 days)
- Display overdue tasks prominently
- Kanban board view with drag-and-drop
- Filter tasks by project, priority, status
- Search tasks by title or description

## FR-5: Notifications

- System generates notifications for tasks due within 24 hours
- System generates notifications for overdue tasks
- Users can view notification history
- Users can mark notifications as read
- Email notifications (configurable in user preferences)
- In-app notification badge/indicator

## FR-6: Calendar View

- Display tasks on calendar by due date
- Monthly, weekly, and daily views
- Click on date to create task with pre-filled due date
- Click on task to view/edit details
- Color-code tasks by project

## FR-7: Third-Party Integration

- Google Calendar integration for syncing tasks
- OAuth flow for Google authentication
- Sync task due dates to Google Calendar events
- Option to enable/disable sync in settings

## FR-8: Responsive Design

- Mobile-responsive layout (320px+)
- Touch-optimized controls for mobile
- Consistent experience across devices
- Progressive Web App (PWA) capabilities

## FR-9: Additional Features

- Dark mode toggle (persisted in preferences)
- Multi-language support (EN, ES initially)
- SEO-optimized landing/marketing pages
- User settings/preferences management

---
