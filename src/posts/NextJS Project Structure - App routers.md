2025-04-17 17:02   tags: [[Coding]], [[NextJS]]

---
Different from plain [[React]] and other frameworks, Next.js uses **file-system based routing**, meaning you can use folders and files to define routes.

## Creating Pages
A page is UI that is rendered on a specific route. To create a page, add a page file inside the app directory and default export a React component. For example, to create an index page (/), create a `page.tsx`[^1] inside the app directory, and add the code below:

```tsx
export default function Page() {
  return <h1>Hello Next.js!</h1>
}
```


## Creating Nested Routes
In Next.JS, you can create any folder inside the app directory, and that folder will become a route. Folders can be nested inside each other to create nested routes. For example, if we have a folder named `blog` inside the `app` directory, we have created the route `http://localhost:3000/blog/`. 

In order to have a UI appear when navigating to the route, the corresponding folder needs to have a [[#Creating Pages|page]] or a [[#Creating Layouts|layout]] file. An example for `page.tsx` is

```tsx
export default async function Page() {
  return <div>Blog Page</dov>
}
```

You can continue nesting folders to create nested routes. Wrapping a folder name in square brackets creates a dynamic route segment which is used to generate multiple pages. For example, if we want to create a page for each blog id, we create a new `[id]` folder inside blog and add a page file:

```tsx
interface BlogIdPageProps {
  params: Promise<{ blogId: string }>;
}

const BlogIdPage = async ({ params }: DocumentIdPageProps) => {
  const blogId = (await params).blogId;
  return <div>Blog Id: {documentId}</div>;
};
export default Blog;
```

In the params of this component, we have the id passed in the URL. For example, the URL of `/blog/1234` will give the blog id of `1234` 

Additionally, if you want a folder, but don't want it as a route, you can wrap that folder in parenthesis. For example, if you have a sign-in and sign-up route, and you want to group them inside a auth folder[^2], you can create `(auth)` and add the sign-in and sign-up folders inside there. The good thing with this approach is that even though the path `/auth` does not exist, you can still use a [[#Creating Layouts|layout]] file to share UI across the sign-in and sign-out pages. 

The structure should look like this:

```
app/
├── (auth)/
│   ├── sign-in/
│   │   └── page.tsx        # Renders /sign-in
│   └── sign-up/
│       └── page.tsx        # Renders /sign-up
├── blog/
│   ├── page.tsx            # Renders /blog
│   └── [id]/               # Dynamic route: /blog/:id
│       └── page.tsx
├── layout.tsx              # Shared layout across all routes
└── page.tsx                # Renders the root route "/"

```

## Creating Layouts
A layout is a UI that is shared between multiple pages. On navigation, they preserve state and do not re-render. The **Root Layout**, is the layout file at the root of your app, which must define `<html>` and `<body>` tags. 

Say you want to have the same navbar all over your blogs. You can create a `layout.tsx` inside of `blog`:

```tsx
export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
	  <nav>
	  <section>{children}</section>
    </div>
  )
}
```

This component, will wrap all of the pages[^3] inside of `blog`.


## Navigation
Finally, in order to navigate to different routes, you can use the build-in Next.js `<Link>` component, which extends the HTML `<a>` tag to provide prefetching[^4] and client-side navigation[^5].



# References

[^1]: Make sure that the casing is also correct

[^2]: Just to make the structure cleaner.

[^3]: The pages are the children, which we wrap inside of `<section>`

[^4]: Prefetching is a way to preload a route in the background before the user visits it. Routes are automatically prefetched as they become visible in the user's viewport.

[^5]: The Next.js App Router enables "soft navigation" between pages, ensuring only the route segments that have changed are re-rendered (partial rendering). This enables client React state to be preserved during navigation.
