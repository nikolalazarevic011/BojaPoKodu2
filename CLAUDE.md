# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React + Vite application called "autospray-serbia" built with modern web technologies. The project uses React 19, Vite for build tooling, and includes Framer Motion for animations and Tailwind CSS for styling.

## Development Commands

- **Start development server**: `npm run dev`
- **Build for production**: `npm run build`  
- **Lint code**: `npm run lint`
- **Preview production build**: `npm run preview`

## Architecture

### Tech Stack
- **Frontend Framework**: React 19 with JSX
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS 4.1
- **Animations**: Framer Motion
- **Linting**: ESLint 9 with React-specific rules

### Project Structure
```
src/
  ├── App.jsx          # Main application component
  ├── main.jsx         # Application entry point
  ├── components/      # Reusable React components (currently empty)
  ├── assets/          # Static assets (images, etc.)
  ├── App.css          # Component-specific styles
  └── index.css        # Global styles
```

### Configuration Files
- `vite.config.js` - Vite configuration with React plugin
- `eslint.config.js` - ESLint configuration with React hooks and refresh plugins
- `package.json` - Project dependencies and scripts

## Development Notes

- The project uses ES modules (`"type": "module"`)
- ESLint is configured with React-specific rules including hooks and refresh plugins
- Custom ESLint rule: unused variables starting with uppercase or underscore are ignored
- The current App.jsx contains a basic Vite + React template counter component
- Components directory exists but is currently empty - this is where reusable components should be placed
- Tailwind CSS is configured but may need a config file for customization