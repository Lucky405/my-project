/* ===========================================================
   POSTS.JS — YOUR BLOG, VISIBLE TO EVERYONE
   ---------------------------------------------------------
   Unlike content.js, this file is the entire blog. Every post
   you want visitors to see needs to be an entry in the array
   below, and the file needs to be pushed to GitHub for the
   live site to show it.

   HOW TO ADD A NEW POST
   ----------------------
   1. Go to the Blog tab on your site and click "+ New Post".
   2. Write your post using the formatting toolbar.
   3. Click "Generate Code" (not "Publish" — there's no publish
      button anymore, because publishing now means "push to
      GitHub").
   4. Copy the code block it gives you.
   5. Paste it as a new entry at the TOP of the `posts` array
      below (so newest stays first — though the site also
      sorts by date automatically, so exact position doesn't
      matter much).
   6. Save this file.
   7. Commit and push:
        git add js/posts.js
        git commit -m "Add new post: <your title>"
        git push
   8. Wait ~1 minute for GitHub Pages to rebuild. Refresh your
      live site — the post is now visible to everyone who
      visits, on any device.

   HOW TO DELETE A POST
   ----------------------
   Delete its entire { ... } block below (including the comma
   after it), then commit and push the same way.

   HOW TO EDIT A POST
   ----------------------
   Just edit the `title`, `deck`, or `body` text directly in
   the block below, then commit and push.
   =========================================================== */

window.SITE_POSTS = [

  // Example post — replace or delete this once you've written your own.
  {
    id: "post_example",
    title: "Why I'm Building This Lab Notebook in Public",
    deck: "On writing research up for people who aren't already in the room.",
    date: "2026-06-20T00:00:00.000Z",
    font: "font-serif",
    body: "<p>Most of what I learn happens in places that aren't built for an outside reader — lab meeting notes, half-finished notebooks, Slack threads with my mentors. This blog is an attempt to take that material and actually explain it, the way I wish more of it had been explained to me when I started.</p><p>I'll mostly be writing about the research itself: the modeling decisions, the dead ends, and the moments where a result surprised me. Some posts will be technical. Some will just be reflections on what it's like doing this kind of work as a high schooler.</p>"
  }

];
