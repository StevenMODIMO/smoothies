document.getElementById("form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;

  const res = await fetch("/blog/new-post", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, content }),
  });

  const json = await res.json();

  if (res.ok) {
    document.getElementById("title").value = "";
    document.getElementById("content").value = "";
    document.getElementById("success").innerText = "Post created Successfully.";
  } else {
    document.getElementById("error").innerText = json.error;
  }
});