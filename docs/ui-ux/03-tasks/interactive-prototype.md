### US-UX-3.6 – Task Management Interactive Prototype

**Stitch AI prototype (text flow)**:
- Kanban board with drag simulation
- Task creation & editing flows
- Task detail view navigation
- Filtering & search interactions
- Status change interactions

#### Logical User Flows (for documentation)

1. **Browse & Filter Tasks flow**
## Task Management User Flows (for documentation)

### 1. Browse & Filter Tasks Flow

**Projects Detail / Tasks Page → Default Kanban view**  
  ↓  
**Switch to List view**  
  ↓  
**Apply Search + Filters** *(status, priority, project, date)*  
  ↓  
**Clear filters / reset**

---

## 2. Create New Task Flow

**Kanban (any column) → "+ Add task"**  
  ↓  
**Create Task Modal → Fill form → "Save"**  
  ↓  
**New task appears in selected column / list view**

---

## 3. Edit Task Flow

**Kanban or List → Click task card/row → Task Detail Drawer**  
  ↓  
**Edit fields inline**  
  ↓  
**"Save changes" → Drawer stays open**

---

## 4. Change Status via Kanban Flow

**Kanban Board → Drag task from TODO to IN_PROGRESS (simulated)**  
  ↓  
**Show visual feedback** *(ghost card, highlight drop zone)*  
  ↓  
**Task appears in new column with updated status**

---

## 5. Delete Task Flow

**Task Detail Drawer → "Delete task"**  
  ↓  
**Delete Confirmation Modal**  
  ↓  
**"Delete" → Drawer closes → Task removed from board/list**

---

## 6. Empty State Flow

**Project without tasks → Kanban/List shows Empty State**  
  ↓  
**"Create your first task" → Create Task Modal**
