# Epics and User Stories

## Epic 1: User Authentication & Account Management

**Priority**: Must Have (MVP)  
**Effort**: 21 story points  
**Owner**: Backend Engineer + Frontend Engineer

### User Stories

**US-1.1: User Registration**

- **As a** new user,
- **I want to** create an account with email and password,
- **So that** I can start managing my tasks.

**Acceptance Criteria**:

- Given I am on the registration page
- When I enter valid email, username, and password
- Then my account is created and I receive a verification email
- And I am redirected to the login page

**Technical Notes**:

- Implement password hashing with bcrypt (cost factor 12)
- Validate email format and uniqueness
- Password must be min 8 characters with complexity requirements
- Send verification email via email service

**Tasks**:

1. Create User domain model and repository interface (Backend, 2 SP)
2. Implement registration API endpoint (Backend, 3 SP)
3. Create registration form component (Frontend, 2 SP)
4. Implement form validation (Frontend, 1 SP)
5. Connect form to API (Frontend, 1 SP)
6. Write unit and integration tests (Backend + Frontend, 2 SP)

**Dependencies**: None

---

**US-1.2: User Login**

- **As a** registered user,
- **I want to** log in with my credentials,
- **So that** I can access my tasks and projects.

**Acceptance Criteria**:

- Given I am on the login page
- When I enter valid credentials
- Then I receive a JWT token and am redirected to the dashboard
- And my session persists until token expiration or logout

**Technical Notes**:

- JWT token with 24-hour expiration
- Implement refresh token mechanism
- Store token securely in httpOnly cookie or localStorage (with security considerations)

**Tasks**:

1. Implement JWT authentication service (Backend, 3 SP)
2. Create login API endpoint (Backend, 2 SP)
3. Create login form component (Frontend, 2 SP)
4. Implement authentication state management (Frontend, 2 SP)
5. Create protected route wrapper (Frontend, 1 SP)
6. Write tests for authentication flow (Backend + Frontend, 2 SP)

**Dependencies**: US-1.1

---

**US-1.3: Password Reset**

- **As a** user who forgot my password,
- **I want to** reset it via email,
- **So that** I can regain access to my account.

**Acceptance Criteria**:

- Given I click "Forgot Password"
- When I enter my email
- Then I receive a password reset link
- And I can set a new password using the link

**Technical Notes**:

- Reset token expires in 1 hour
- Token should be single-use
- Invalidate existing sessions after password reset

**Tasks**:

1. Implement password reset token generation (Backend, 2 SP)
2. Create reset password API endpoints (Backend, 2 SP)
3. Create forgot password form (Frontend, 1 SP)
4. Create reset password form (Frontend, 1 SP)
5. Write tests (Backend + Frontend, 2 SP)

**Dependencies**: US-1.2

---

**US-1.4: User Profile Management**

- **As a** logged-in user,
- **I want to** update my profile information,
- **So that** I can keep my account details current.

**Acceptance Criteria**:

- Given I am on the profile settings page
- When I update my username or email
- Then my changes are saved
- And I see a success confirmation

**Technical Notes**:

- Validate uniqueness of email and username
- Require password confirmation for email changes
- Re-send verification for new email addresses

**Tasks**:

1. Create user profile update endpoint (Backend, 2 SP)
2. Create profile settings component (Frontend, 2 SP)
3. Implement profile update logic (Frontend, 1 SP)
4. Write tests (Backend + Frontend, 1 SP)

**Dependencies**: US-1.2

---

### Epic 2: Project Management

**Priority**: Must Have (MVP)  
**Effort**: 13 story points  
**Owner**: Backend Engineer + Frontend Engineer

### User Stories

**US-2.1: Create Project**

- **As a** user,
- **I want to** create a new project,
- **So that** I can organize my tasks by project.

**Acceptance Criteria**:

- Given I am logged in
- When I click "New Project" and enter a name and optional description
- Then a new project is created
- And I see it in my project list

**Technical Notes**:

- Project name is required (max 100 characters)
- Description is optional (max 500 characters)
- Auto-generate color if not provided
- Validate user ownership

**Tasks**:

1. Create Project domain model and repository (Backend, 2 SP)
2. Implement create project API endpoint (Backend, 1 SP)
3. Create project form modal component (Frontend, 2 SP)
4. Connect form to API (Frontend, 1 SP)
5. Write tests (Backend + Frontend, 1 SP)

**Dependencies**: US-1.2 (authentication)

---

**US-2.2: View Projects List**

- **As a** user,
- **I want to** see all my projects,
- **So that** I can choose which project to work on.

**Acceptance Criteria**:

- Given I am logged in
- When I navigate to the projects page
- Then I see a list of all my projects with names and task counts
- And I can click on a project to view its tasks

**Technical Notes**:

- Display projects with task count (aggregate query)
- Sort by creation date (newest first) by default
- Show archived projects separately

**Tasks**:

1. Implement list projects API endpoint (Backend, 1 SP)
2. Create projects list component (Frontend, 2 SP)
3. Implement project navigation (Frontend, 1 SP)
4. Write tests (Backend + Frontend, 1 SP)

**Dependencies**: US-2.1

---

**US-2.3: Update Project**

- **As a** user,
- **I want to** edit project details,
- **So that** I can keep project information accurate.

**Acceptance Criteria**:

- Given I am viewing a project
- When I click edit and change the name or description
- Then the project is updated
- And I see the updated information

**Technical Notes**:

- Validate ownership before allowing update
- Optimistic UI updates for better UX

**Tasks**:

1. Implement update project API endpoint (Backend, 1 SP)
2. Create project edit form (Frontend, 1 SP)
3. Connect form to API (Frontend, 1 SP)
4. Write tests (Backend + Frontend, 1 SP)

**Dependencies**: US-2.2

---

**US-2.4: Delete Project**

- **As a** user,
- **I want to** delete a project,
- **So that** I can remove projects I no longer need.

**Acceptance Criteria**:

- Given I am viewing a project
- When I click delete and confirm
- Then the project and all its tasks are deleted
- And I am redirected to the projects list

**Technical Notes**:

- Show confirmation modal with warning about task deletion
- Cascade delete all associated tasks
- Consider soft delete for data recovery (future)

**Tasks**:

1. Implement delete project API endpoint (Backend, 1 SP)
2. Create delete confirmation modal (Frontend, 1 SP)
3. Connect delete action to API (Frontend, 0.5 SP)
4. Write tests (Backend + Frontend, 0.5 SP)

**Dependencies**: US-2.2

---

### Epic 3: Task Management

**Priority**: Must Have (MVP)  
**Effort**: 21 story points  
**Owner**: Backend Engineer + Frontend Engineer

#### User Stories

**US-3.1: Create Task**

- **As a** user,
- **I want to** create a task within a project,
- **So that** I can track work items.

**Acceptance Criteria**:

- Given I am viewing a project
- When I click "Add Task" and enter a title
- Then a new task is created with status "TODO"
- And it appears in the task list

**Technical Notes**:

- Title is required (max 200 characters)
- Description is optional (max 2000 characters)
- Default status: TODO
- Default priority: MEDIUM
- Due date is optional

**Tasks**:

1. Create Task domain model and repository (Backend, 2 SP)
2. Implement create task API endpoint (Backend, 2 SP)
3. Create task form component (Frontend, 2 SP)
4. Connect form to API (Frontend, 1 SP)
5. Write tests (Backend + Frontend, 1 SP)

**Dependencies**: US-2.1

---

**US-3.2: View Tasks**

- **As a** user,
- **I want to** see all tasks in a project,
- **So that** I can understand what needs to be done.

**Acceptance Criteria**:

- Given I am viewing a project
- When the page loads
- Then I see all tasks grouped by status (TODO, IN_PROGRESS, DONE)
- And each task shows title, priority, and due date

**Technical Notes**:

- Implement efficient querying with eager loading
- Support filtering by status, priority
- Return tasks in position order within each status

**Tasks**:

1. Implement list tasks API endpoint with filters (Backend, 2 SP)
2. Create task list component (Frontend, 2 SP)
3. Implement filtering UI (Frontend, 1 SP)
4. Write tests (Backend + Frontend, 1 SP)

**Dependencies**: US-3.1

---

**US-3.3: Update Task Status**

- **As a** user,
- **I want to** change a task's status,
- **So that** I can track progress.

**Acceptance Criteria**:

- Given I am viewing tasks
- When I drag a task to a different status column
- Then the task status is updated
- And it appears in the new column

**Technical Notes**:

- Implement drag-and-drop with react-beautiful-dnd or similar
- Update status via PATCH endpoint
- Optimistic UI update for smooth UX

**Tasks**:

1. Implement update task API endpoint (Backend, 1 SP)
2. Implement drag-and-drop functionality (Frontend, 3 SP)
3. Connect drag action to API (Frontend, 1 SP)
4. Write tests (Backend + Frontend, 1 SP)

**Dependencies**: US-3.2

---

**US-3.4: Update Task Details**

- **As a** user,
- **I want to** edit task information,
- **So that** I can keep task details accurate.

**Acceptance Criteria**:

- Given I click on a task
- When I edit the title, description, priority, or due date
- Then the task is updated
- And I see the updated information

**Technical Notes**:

- Open task in modal or side panel
- All fields are editable
- Validate data before submission

**Tasks**:

1. Create task detail view component (Frontend, 2 SP)
2. Implement task update logic (Frontend, 1 SP)
3. Connect to update API (Frontend, 1 SP)
4. Write tests (Frontend, 1 SP)

**Dependencies**: US-3.3

---

**US-3.5: Delete Task**

- **As a** user,
- **I want to** delete a task,
- **So that** I can remove completed or unnecessary tasks.

**Acceptance Criteria**:

- Given I am viewing a task
- When I click delete and confirm
- Then the task is removed
- And it no longer appears in the task list

**Technical Notes**:

- Show confirmation modal
- Consider soft delete for undo capability (future)

**Tasks**:

1. Implement delete task API endpoint (Backend, 1 SP)
2. Create delete button and confirmation (Frontend, 1 SP)
3. Connect to API (Frontend, 0.5 SP)
4. Write tests (Backend + Frontend, 0.5 SP)

**Dependencies**: US-3.2

---

### Epic 4: Dashboard & Visualization

**Priority**: Must Have (MVP)  
**Effort**: 13 story points  
**Owner**: Frontend Engineer + Backend Engineer

#### User Stories

**US-4.1: Task Summary Dashboard**

- **As a** user,
- **I want to** see an overview of my tasks,
- **So that** I can understand my workload at a glance.

**Acceptance Criteria**:

- Given I am logged in
- When I navigate to the dashboard
- Then I see counts of tasks by status (TODO, IN_PROGRESS, DONE)
- And I see upcoming tasks (next 7 days)
- And I see overdue tasks

**Technical Notes**:

- Implement efficient aggregate queries
- Cache dashboard data with short TTL (5 minutes)
- Display charts using recharts or similar library

**Tasks**:

1. Implement dashboard statistics API (Backend, 2 SP)
2. Create dashboard layout component (Frontend, 2 SP)
3. Create task summary cards (Frontend, 2 SP)
4. Implement data fetching and state management (Frontend, 1 SP)
5. Write tests (Backend + Frontend, 1 SP)

**Dependencies**: US-3.2

---

**US-4.2: Kanban Board View**

- **As a** user,
- **I want to** see tasks in a kanban board,
- **So that** I can visualize workflow and move tasks easily.

**Acceptance Criteria**:

- Given I am viewing a project
- When I select kanban view
- Then I see three columns: TODO, IN_PROGRESS, DONE
- And I can drag tasks between columns
- And task counts are shown in column headers

**Technical Notes**:

- Use react-beautiful-dnd for drag-and-drop
- Implement virtual scrolling for large task lists
- Maintain task position within columns

**Tasks**:

1. Create kanban board component (Frontend, 3 SP)
2. Implement column rendering (Frontend, 1 SP)
3. Integrate drag-and-drop (Frontend, 2 SP)
4. Write tests (Frontend, 2 SP)

**Dependencies**: US-3.3

---

**US-4.3: Task Search**

- **As a** user,
- **I want to** search for tasks by title or description,
- **So that** I can quickly find specific tasks.

**Acceptance Criteria**:

- Given I am on the dashboard or project page
- When I enter text in the search box
- Then I see filtered results matching my query
- And results are highlighted

**Technical Notes**:

- Implement debounced search (300ms delay)
- Use ILIKE queries for case-insensitive search
- Consider full-text search for better performance (future)

**Tasks**:

1. Implement search API endpoint (Backend, 2 SP)
2. Create search input component (Frontend, 1 SP)
3. Implement search logic with debouncing (Frontend, 1 SP)
4. Write tests (Backend + Frontend, 1 SP)

**Dependencies**: US-3.2

---

### Epic 5: Notifications System

**Priority**: Should Have (Phase 1)  
**Effort**: 21 story points  
**Owner**: Backend Engineer + Frontend Engineer

#### User Stories

**US-5.1: Deadline Notifications**

- **As a** user,
- **I want to** receive notifications for upcoming task deadlines,
- **So that** I don't miss important due dates.

**Acceptance Criteria**:

- Given I have a task due within 24 hours
- When the system runs its notification check
- Then I receive an in-app notification
- And I receive an email notification (if enabled)

**Technical Notes**:

- Implement background job (Celery or APScheduler)
- Run notification check every hour
- Create notification records in database
- Send email via email service (SendGrid/AWS SES)

**Tasks**:

1. Create Notification domain model (Backend, 1 SP)
2. Implement notification generation service (Backend, 3 SP)
3. Implement scheduled job (Backend, 2 SP)
4. Create email templates (Backend, 1 SP)
5. Implement email sending (Backend, 2 SP)
6. Write tests (Backend, 2 SP)

**Dependencies**: US-3.1, US-1.2

---

**US-5.2: In-App Notifications**

- **As a** user,
- **I want to** view notifications in the app,
- **So that** I can stay informed without checking email.

**Acceptance Criteria**:

- Given I have notifications
- When I click the notification bell icon
- Then I see a list of my notifications
- And unread notifications are highlighted
- And I can mark notifications as read

**Technical Notes**:

- Display notification badge with unread count
- Implement notification dropdown/panel
- Use WebSocket for real-time updates (future)

**Tasks**:

1. Implement notification API endpoints (Backend, 2 SP)
2. Create notification bell component (Frontend, 2 SP)
3. Create notification list component (Frontend, 2 SP)
4. Implement notification state management (Frontend, 1 SP)
5. Write tests (Backend + Frontend, 2 SP)

**Dependencies**: US-5.1

---

**US-5.3: Notification Preferences**

- **As a** user,
- **I want to** control my notification settings,
- **So that** I receive only relevant notifications.

**Acceptance Criteria**:

- Given I am in settings
- When I toggle notification preferences
- Then my preferences are saved
- And notifications respect my settings

**Technical Notes**:

- Store preferences in user model (JSON field)
- Options: email enabled, deadline threshold (24h, 48h, 1week)
- Implement notification filtering based on preferences

**Tasks**:

1. Add preferences to User model (Backend, 1 SP)
2. Implement preferences update API (Backend, 1 SP)
3. Create notification settings UI (Frontend, 2 SP)
4. Update notification service to respect preferences (Backend, 1 SP)
5. Write tests (Backend + Frontend, 1 SP)

**Dependencies**: US-5.2

---

### Epic 6: Calendar View

**Priority**: Should Have (Phase 2)  
**Effort**: 21 story points  
**Owner**: Frontend Engineer + Backend Engineer

#### User Stories

**US-6.1: Monthly Calendar View**

- **As a** user,
- **I want to** see my tasks on a monthly calendar,
- **So that** I can visualize my schedule.

**Acceptance Criteria**:

- Given I am on the calendar page
- When I select month view
- Then I see a calendar with tasks displayed on their due dates
- And I can click on a task to view details

**Technical Notes**:

- Use react-big-calendar or similar library
- Tasks are color-coded by project
- Show task count on dates with multiple tasks

**Tasks**:

1. Implement calendar data API endpoint (Backend, 2 SP)
2. Create calendar view component (Frontend, 3 SP)
3. Implement task rendering on calendar (Frontend, 2 SP)
4. Implement task click handler (Frontend, 1 SP)
5. Write tests (Backend + Frontend, 2 SP)

**Dependencies**: US-3.1

---

**US-6.2: Weekly & Daily Calendar Views**

- **As a** user,
- **I want to** view my tasks in weekly and daily formats,
- **So that** I can focus on near-term work.

**Acceptance Criteria**:

- Given I am on the calendar page
- When I switch to week or day view
- Then I see tasks for that time period
- And I can navigate between weeks/days

**Technical Notes**:

- Reuse calendar component with different view props
- Implement navigation controls
- Ensure responsive layout for mobile

**Tasks**:

1. Implement week/day view rendering (Frontend, 2 SP)
2. Add view switching controls (Frontend, 1 SP)
3. Implement navigation (Frontend, 1 SP)
4. Write tests (Frontend, 2 SP)

**Dependencies**: US-6.1

---

**US-6.3: Calendar Task Creation**

- **As a** user,
- **I want to** create tasks by clicking on a calendar date,
- **So that** I can quickly schedule tasks.

**Acceptance Criteria**:

- Given I am viewing the calendar
- When I click on a date
- Then a task creation form opens with the due date pre-filled
- And I can complete the form to create the task

**Technical Notes**:

- Modal opens on date click
- Due date is pre-filled from clicked date
- Project selection is required

**Tasks**:

1. Implement date click handler (Frontend, 1 SP)
2. Create calendar task form (Frontend, 2 SP)
3. Connect form to create task API (Frontend, 1 SP)
4. Write tests (Frontend, 2 SP)

**Dependencies**: US-6.1, US-3.1

---

**US-6.4: Drag-and-Drop Task Rescheduling**

- **As a** user,
- **I want to** drag tasks to different dates on the calendar,
- **So that** I can easily reschedule work.

**Acceptance Criteria**:

- Given I am viewing the calendar
- When I drag a task to a different date
- Then the task's due date is updated
- And it appears on the new date

**Technical Notes**:

- Implement drag-and-drop with react-dnd or calendar library feature
- Update task due date via API
- Show confirmation or undo option

**Tasks**:

1. Implement drag-and-drop handlers (Frontend, 3 SP)
2. Connect to update task API (Frontend, 1 SP)
3. Add visual feedback (Frontend, 1 SP)
4. Write tests (Frontend, 2 SP)

**Dependencies**: US-6.1, US-3.3

---

### Epic 7: Third-Party Integrations

**Priority**: Could Have (Phase 3)  
**Effort**: 21 story points  
**Owner**: Backend Engineer + Frontend Engineer

#### User Stories

**US-7.1: Google Calendar OAuth**

- **As a** user,
- **I want to** connect my Google account,
- **So that** I can sync tasks with Google Calendar.

**Acceptance Criteria**:

- Given I am in settings
- When I click "Connect Google Calendar"
- Then I am redirected to Google OAuth
- And after authorization, my account is linked
- And I return to the settings page

**Technical Notes**:

- Implement OAuth 2.0 flow
- Store access and refresh tokens securely (encrypted)
- Handle token refresh automatically
- Implement disconnect functionality

**Tasks**:

1. Set up Google Cloud project and OAuth credentials (Backend, 1 SP)
2. Implement OAuth flow endpoints (Backend, 3 SP)
3. Create token storage and refresh logic (Backend, 2 SP)
4. Create Google Calendar connection UI (Frontend, 2 SP)
5. Write tests (Backend + Frontend, 2 SP)

**Dependencies**: US-1.2

---

**US-7.2: Sync Tasks to Google Calendar**

- **As a** user,
- **I want to** automatically sync tasks with due dates to Google Calendar,
- **So that** I have a unified view of my schedule.

**Acceptance Criteria**:

- Given I have connected Google Calendar
- When I create or update a task with a due date
- Then a corresponding event is created/updated in Google Calendar
- And changes sync within 5 minutes

**Technical Notes**:

- Implement background sync job
- Map task properties to calendar event properties
- Handle API rate limits
- Store mapping between tasks and calendar events

**Tasks**:

1. Implement Google Calendar API integration (Backend, 3 SP)
2. Create sync service (Backend, 3 SP)
3. Implement background sync job (Backend, 2 SP)
4. Add sync status indicators (Frontend, 1 SP)
5. Write tests (Backend + Frontend, 2 SP)

**Dependencies**: US-7.1

---

**US-7.3: Bidirectional Sync**

- **As a** user,
- **I want** changes in Google Calendar to reflect in TaskManager,
- **So that** my tasks stay in sync regardless of where I make changes.

**Acceptance Criteria**:

- Given I have syncing enabled
- When I modify or delete a calendar event that was synced from a task
- Then the corresponding task is updated or marked as complete
- And changes appear in TaskManager

**Technical Notes**:

- Implement webhook listener for Google Calendar changes
- Use push notifications (watch API)
- Handle conflict resolution (last write wins or manual resolution)

**Tasks**:

1. Implement webhook endpoint (Backend, 2 SP)
2. Register for calendar change notifications (Backend, 2 SP)
3. Implement change processing (Backend, 3 SP)
4. Handle conflict resolution (Backend, 2 SP)
5. Write tests (Backend, 2 SP)

**Dependencies**: US-7.2

---

### Epic 8: User Experience Enhancements

**Priority**: Should Have (Phase 1 & 3)  
**Effort**: 16 story points  
**Owner**: Frontend Engineer

#### User Stories

**US-8.1: Dark Mode**

- **As a** user,
- **I want to** toggle between light and dark themes,
- **So that** I can use the app comfortably in different lighting conditions.

**Acceptance Criteria**:

- Given I am logged in
- When I toggle the theme switch
- Then the entire UI changes to dark/light mode
- And my preference is saved for future sessions

**Technical Notes**:

- Use CSS variables or styled-components theming
- Store preference in user settings
- Apply theme on app load
- Ensure all components support both themes

**Tasks**:

1. Define theme variables (Frontend, 1 SP)
2. Implement theme provider and context (Frontend, 2 SP)
3. Update all components to use theme variables (Frontend, 3 SP)
4. Add theme toggle control (Frontend, 1 SP)
5. Persist theme preference (Frontend, 1 SP)
6. Write tests (Frontend, 1 SP)

**Dependencies**: US-1.2

---

**US-8.2: Localization (i18n)**

- **As a** user,
- **I want to** use the app in my preferred language,
- **So that** I can understand the interface better.

**Acceptance Criteria**:

- Given I am in settings
- When I select a language (English or Spanish)
- Then all UI text changes to that language
- And my preference is saved

**Technical Notes**:

- Use react-i18next or similar library
- Extract all strings to translation files
- Support EN and ES initially
- Structure for easy addition of more languages

**Tasks**:

1. Set up i18n library and configuration (Frontend, 1 SP)
2. Create translation files (Frontend, 2 SP)
3. Replace hardcoded strings with translation keys (Frontend, 3 SP)
4. Add language selector (Frontend, 1 SP)
5. Persist language preference (Frontend, 1 SP)
6. Write tests (Frontend, 1 SP)

**Dependencies**: US-1.2

---

**US-8.3: SEO Optimization**

- **As a** potential user,
- **I want to** discover the app through search engines,
- **So that** I can learn about its features.

**Acceptance Criteria**:

- Given the app is deployed
- When I search for task management tools
- Then the TaskManager app appears in search results
- And the landing page has proper meta tags and structured data

**Technical Notes**:

- Implement server-side rendering or static generation for landing page
- Add meta tags for title, description, Open Graph, Twitter Cards
- Implement robots.txt and sitemap.xml
- Ensure proper heading hierarchy
- Optimize images and load times

**Tasks**:

1. Create SEO-optimized landing page (Frontend, 2 SP)
2. Add meta tags and structured data (Frontend, 1 SP)
3. Generate sitemap and robots.txt (Frontend, 1 SP)
4. Optimize performance (Frontend, 1 SP)
5. Validate with Google Search Console (Frontend, 1 SP)

**Dependencies**: None (independent feature)

---
