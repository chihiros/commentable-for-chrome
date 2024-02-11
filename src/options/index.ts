{
  chrome.storage.local.set({ url: "https://example.com" }).then(() => {
    console.log("Save");
  });
}
