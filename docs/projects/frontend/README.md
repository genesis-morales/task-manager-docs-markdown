# TaskManager Frontend Project

## Overview

This directory will contain the frontend application for the TaskManager project. The frontend is an independent React-based web application that provides a user-friendly interface for task and project management.

## Tech Stack

- **Framework**: React 18+
- **Language**: TypeScript
- **Build Tool**: Vite
- **UI Library**: Ant Design
- **State Management**: Redux Toolkit
- **Routing**: React Router v6
- **Styling**: CSS Modules / Styled Components
- **Testing**: Jest + React Testing Library
- **API Client**: Axios

## Architecture

The frontend follows a **feature-based architecture** with clear separation of concerns:

## Development Guidelines

### Best Practices

#### React Components

- Use functional components with hooks
- Keep components small and focused (Single Responsibility)
- Use TypeScript interfaces for props
- Implement proper prop validation
- Use React.memo for performance optimization
- Implement error boundaries for error handling

#### State Management

- Use Redux Toolkit for global state
- Use local state (useState) for UI-only state
- Use Context API for theme/localization
- Implement proper action naming (feature/actionType)
- Use Redux Toolkit Query for API caching

#### TypeScript

- Enable strict mode
- Define interfaces for all props and state
- Use enums for constants
- Avoid `any` type (use `unknown` if needed)
- Leverage type inference where appropriate

#### Code Style

- Follow Airbnb React/TypeScript style guide
- Use ESLint and Prettier for code formatting
- Name files with PascalCase for components, camelCase for utilities
- Use descriptive variable and function names
- Write clear, self-documenting code

#### Testing

- Write tests for all components and logic
- Test user interactions, not implementation
- Use React Testing Library best practices
- Mock API calls with MSW (Mock Service Worker)
- Aim for 70%+ code coverage

#### Accessibility

- Follow WCAG 2.1 AA guidelines
- Use semantic HTML elements
- Implement keyboard navigation
- Add ARIA attributes where needed
- Test with screen readers
- Ensure proper color contrast

#### Performance

- Implement code splitting with React.lazy
- Use dynamic imports for large dependencies
- Optimize images (WebP, lazy loading)
- Implement virtual scrolling for long lists
- Use React.memo, useMemo, useCallback appropriately
- Monitor bundle size

## Getting Started

_This section will be populated with the reference to the frontend project when it is initialized._

## UI/UX Guidelines

### Design System

- **Color Palette**: Based on Ant Design theme
- **Typography**: System fonts for performance
- **Spacing**: 8px base unit (8, 16, 24, 32, 40, 48, 64)
- **Breakpoints**:
  - Mobile: 320px - 767px
  - Tablet: 768px - 1023px
  - Desktop: 1024px+

### Component Usage

- Use Ant Design components for consistency
- Customize theme via ConfigProvider
- Implement dark mode support
- Ensure responsive design for all components

### User Interactions

- Provide visual feedback for all actions
- Show loading states during async operations
- Display clear error messages
- Implement confirmation for destructive actions
- Use optimistic UI updates where appropriate

## Related Documentation

- [Frontend Engineer User Stories](../../docs/user-stories/frontend-engineer-stories.md)
- [Technical Architecture](../../docs/architecture/technical-architecture.md)
- [UI/UX Guidelines](./prototype/ui-ux-guidelines.md)
- [API Contract Definition](../../docs/architecture/api-contracts.md)
- [Role Mapping](../../docs/planning/role-mapping.md)

## Project Status

**Status**: Planning Complete  
**Next Steps**: Project initialization and setup

---

**Last Updated**: November 11, 2025
