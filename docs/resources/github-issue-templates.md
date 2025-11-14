# GitHub Issue Structure

## Issue Template for Epics

```markdown
## Epic: [Epic Name]

**Priority**: [Must Have | Should Have | Could Have | Won't Have]
**Phase**: [MVP | Phase 1 | Phase 2 | Phase 3]
**Effort**: [Total Story Points]
**Owner**: [Role]

### Description

[High-level description of the epic and its business value]

### Goals

- [Goal 1]
- [Goal 2]
- [Goal 3]

### User Stories

- [ ] #[issue-number] [User Story Title]
- [ ] #[issue-number] [User Story Title]
- [ ] #[issue-number] [User Story Title]

### Acceptance Criteria

- [ ] [Criteria 1]
- [ ] [Criteria 2]
- [ ] [Criteria 3]

### Technical Notes

[Architecture considerations, patterns to use, technical constraints]

### Dependencies

- Depends on: #[issue-number]
- Blocks: #[issue-number]

### Definition of Done

- [ ] All user stories completed
- [ ] Unit tests written and passing (80%+ coverage)
- [ ] Integration tests written and passing
- [ ] Code reviewed and approved
- [ ] Documentation updated
- [ ] Deployed to staging and tested
- [ ] Acceptance criteria met

Labels: `epic`, `[phase]`, `[priority]`
```

### Issue Template for User Stories

````markdown
## User Story: [Story Title]

**Epic**: #[epic-issue-number]
**Priority**: [Must Have | Should Have | Could Have]
**Effort**: [Story Points]
**Owner**: [Role]

### User Story

As a [user type],
I want to [action/goal],
So that [benefit/value].

### Acceptance Criteria

- [ ] Given [context], When [action], Then [outcome]
- [ ] Given [context], When [action], Then [outcome]
- [ ] Given [context], When [action], Then [outcome]

### Technical Specifications

TBD

### Technical Notes

- **Architecture**: [Pattern to follow]
- **Data Models**: [Models involved]
- **API Endpoints**: [Endpoints to create/modify]
- **Dependencies**: [Libraries or services needed]
- **Security**: [Security considerations]
- **Performance**: [Performance requirements]

### API Contract (if applicable)

```http
POST /api/v1/[endpoint]
Content-Type: application/json

{
  "field": "value"
}

Response: 201 Created
{
  "id": "uuid",
  "field": "value",
  "created_at": "timestamp"
}
```
````

### Dependencies

- Depends on: #[issue-number]
- Blocks: #[issue-number]

### Definition of Done

- [ ] Code implemented following Clean Architecture principles
- [ ] Unit tests written with 80%+ coverage
- [ ] Integration tests passing
- [ ] Code reviewed and approved
- [ ] Documentation updated (if needed)
- [ ] Tested on staging environment
- [ ] All acceptance criteria met
- [ ] No critical or high-severity bugs

Labels: `user-story`, `[epic-name]`, `[role]`, `[priority]`

```

---

```
