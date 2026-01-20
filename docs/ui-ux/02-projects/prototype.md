### US-UX-2.4 – Projects Interactive Prototype
**Stitch AI prototype**:
- Projects list → Create/Edit → Detail view flow
- Grid/List toggle + Sort/Filter interactions
- Delete project with confirmation
- Navigation between projects

### Required Screens

- Projects List Grid View 
- Projects List View 
- Projects Empty State 
- Create Project Modal
- Edit Project Modal 
- Project Detail View 
- Project Delete Confirmation Modal

---

### Logical User Flows (for documentation)

**Dashboard → Projects List (Grid view by default)**  
  ↓  
**Toggle Grid ↔ List view**  
  ↓  
**Use Sort/Filter controls**

---

## Create New Project Flow

**Projects List → "+ New Project" button**  
  ↓  
**Create Project Modal → Fill form → "Create project"**  
  ↓  
**Return to Projects List (new project appears)**  
  ↓  
**Click new project card → Project Detail View**

---

## Edit Project Flow

**Projects List → Click project card → Project Detail View**  
  ↓  
**"Edit project" button**  
  ↓  
**Edit Project Modal (pre-filled)**  
  ↓  
**"Update" → Return to Project Detail (updated)**

---

## Delete Project Flow

**Project Detail View → More menu (⋯) → "Delete project"**  
  ↓  
**Delete Confirmation Modal**  
  ↓  
**"Delete project" → Return to Projects List**

---

## Empty State Flow

**New user → Projects List → Empty State**  
  ↓  
**"Create project" → Create Project Modal**
