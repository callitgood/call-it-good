# How to Add Projects to Call It Good Website

This guide explains how to add new projects to the projects page of the Call It Good website.

## Project Data Structure

All project data is stored in `/src/app/projects/data.js`. This file contains three exported arrays:

1. `majorProjects` - Detailed project cards with photos and descriptions
2. `smallTasks` - Simple list of completed tasks
3. `categories` - Filter categories for projects

## Adding Major Projects

Major projects are displayed as full cards with photos, descriptions, and tags. They appear in a responsive grid (3 columns on desktop, 2 on tablet, 1 on mobile).

### To add a new major project:

1. Open `/src/app/projects/data.js`
2. Add a new object to the `majorProjects` array:

```javascript
{
  id: 5, // Increment from the last ID
  title: "Your Project Title",
  description: "Detailed description of what was accomplished, challenges faced, and results achieved.",
  category: "Project Category", // Must match one of the categories
  image: "/projects/your-image.jpg", // Add image to /public/projects/
  tags: ["tag1", "tag2", "tag3"] // Relevant keywords
}
```

### Major Project Guidelines:
- Use a unique incrementing ID
- Keep titles concise but descriptive
- Descriptions should be 2-3 sentences explaining the scope and outcome
- Categories should match existing ones or add new ones to the categories array
- Tags should be lowercase, single words when possible
- Images should be added to `/public/projects/` folder

## Adding Small Tasks

Small tasks are displayed in a scrollable single-column list. Perfect for routine work that doesn't need a full project card.

### To add new small tasks:

1. Open `/src/app/projects/data.js`
2. Add new string entries to the `smallTasks` array:

```javascript
"Your task description here",
"Another task description",
```

### Small Task Guidelines:
- Keep descriptions to one sentence
- Be specific about what was accomplished
- No categories or hashtags needed
- The list is scrollable and can handle 80-100+ entries

## Managing Categories

Categories are used for filtering projects and organizing major projects.

### To add a new category:

1. Add it to the `categories` array in `data.js`
2. Make sure any major projects using this category match exactly

## Adding Images (Major Projects Only)

1. Create folder `/public/projects/` if it doesn't exist
2. Add your image files there (JPG, PNG, WebP recommended)
3. Use descriptive filenames like `project-name.jpg`
4. Update the `image` field in your project object to `/projects/filename.jpg`

## Examples

### Major Project Example:
```javascript
{
  id: 5,
  title: "Garage Foundation Repair Prep",
  description: "Excavated around garage foundation, removed old concrete apron, and prepared area for new foundation pour. Required jackhammer work and precise grading.",
  category: "Excavation & Removal",
  image: "/projects/garage-foundation.jpg",
  tags: ["excavation", "concrete", "foundation", "preparation"]
}
```

### Small Task Examples:
```javascript
"Hauled old hot tub from backyard to disposal site",
"Installed new mailbox post and hardware",
"Cleaned gutters and downspouts on 2-story home",
```

## File Structure

```
src/app/projects/
├── data.js          # All project data
├── page.tsx         # Projects page component
└── HOW-TO-ADD-PROJECTS.md  # This guide
```

## Tips

- Always test your changes locally before deploying
- Keep data.js organized with consistent formatting
- Add new major projects to the end of the array
- Small tasks can be added anywhere in the list
- Consider the mobile experience when writing descriptions
