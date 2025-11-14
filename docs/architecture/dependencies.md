# Dependencies

## Technical Dependencies

### Backend Dependencies

| Dependency  | Version | Purpose          | Risk Level |
| ----------- | ------- | ---------------- | ---------- |
| FastAPI     | 0.104+  | Web framework    | Low        |
| SQLAlchemy  | 2.0+    | ORM              | Low        |
| Alembic     | 1.12+   | Migrations       | Low        |
| PostgreSQL  | 14+     | Database         | Low        |
| Pydantic    | 2.0+    | Validation       | Low        |
| python-jose | 3.3+    | JWT handling     | Medium     |
| passlib     | 1.7+    | Password hashing | Low        |
| pytest      | 7.4+    | Testing          | Low        |

### Frontend Dependencies

| Dependency    | Version | Purpose          | Risk Level |
| ------------- | ------- | ---------------- | ---------- |
| React         | 18+     | UI framework     | Low        |
| TypeScript    | 5.0+    | Type safety      | Low        |
| Ant Design    | 5.0+    | UI components    | Low        |
| Redux Toolkit | 2.0+    | State management | Low        |
| React Router  | 6.0+    | Routing          | Low        |
| Vite          | 5.0+    | Build tool       | Low        |
| Axios         | 1.6+    | HTTP client      | Low        |
| Jest          | 29+     | Testing          | Low        |

## External Service Dependencies

| Service                          | Purpose          | Criticality | Fallback Strategy          |
| -------------------------------- | ---------------- | ----------- | -------------------------- |
| PostgreSQL Database              | Data persistence | Critical    | Backup replica             |
| Email Service (SendGrid/AWS SES) | Notifications    | High        | Queue for retry            |
| Google Calendar API              | Calendar sync    | Medium      | Disable feature gracefully |
| Redis (Optional)                 | Caching          | Medium      | Operate without cache      |
| CDN                              | Static assets    | Medium      | Direct server delivery     |

## Infrastructure Dependencies

- **Hosting**: Cloud provider (AWS, GCP, or DigitalOcean)
- **Domain & SSL**: Domain registration and SSL certificate
- **CI/CD**: GitHub Actions (already available)
- **Monitoring**: APM tool (New Relic, Datadog, or open-source)

## Cross-Team Dependencies

- **Design Assets**: UI/UX designs, icons, branding (estimated 2 weeks before Phase 1)
- **DevOps Setup**: Production environment, CI/CD pipeline (1 week before MVP deployment)
- **Legal/Compliance**: Privacy policy, terms of service (before public launch)

---
