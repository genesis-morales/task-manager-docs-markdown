# Technical Architecture Overview

## Architecture Pattern

- **Clean Architecture** with Domain-Driven Design (DDD)
- **Bounded Contexts**: User Management, Project Management, Task Management, Notifications, Integrations

### System Layers

#### 1. Presentation Layer (Frontend)

- React with TypeScript
- Component-based architecture with Ant Design
- Redux for state management
- React Router for navigation

#### 2. Application Layer (Backend API)

- FastAPI with async support
- RESTful API design
- JWT authentication
- Rate limiting and request validation

#### 3. Domain Layer

- Core business logic
- Domain models: User, Project, Task, Notification
- Domain services and value objects
- Repository interfaces

#### 4. Infrastructure Layer

- PostgreSQL database
- SQLAlchemy ORM
- Alembic migrations
- External service integrations (Google Calendar, etc.)
- Email service (notifications)

### Data Models (Core Entities)

```python
# Simplified domain model structure

User
  - id: UUID
  - email: string (unique)
  - username: string (unique)
  - password_hash: string
  - created_at: datetime
  - updated_at: datetime
  - preferences: JSON (theme, language, timezone)

Project
  - id: UUID
  - user_id: UUID (FK to User)
  - name: string
  - description: text
  - color: string (hex code)
  - created_at: datetime
  - updated_at: datetime
  - archived: boolean

Task
  - id: UUID
  - project_id: UUID (FK to Project)
  - title: string
  - description: text
  - status: enum (TODO, IN_PROGRESS, DONE)
  - priority: enum (LOW, MEDIUM, HIGH, URGENT)
  - due_date: datetime (nullable)
  - completed_at: datetime (nullable)
  - created_at: datetime
  - updated_at: datetime
  - position: integer (for ordering)

Notification
  - id: UUID
  - user_id: UUID (FK to User)
  - task_id: UUID (FK to Task)
  - type: enum (DEADLINE_APPROACHING, OVERDUE, REMINDER)
  - message: text
  - read: boolean
  - sent_at: datetime
  - created_at: datetime
```

---
