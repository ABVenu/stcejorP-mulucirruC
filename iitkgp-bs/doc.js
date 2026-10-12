marked.setOptions({ gfm: true });

var doc = document.getElementById("doc");
var file = doc.getAttribute("data-file");
var base = doc.getAttribute("data-base");

function headingLevel(el) {
  var match = /^H([1-6])$/.exec(el.tagName || "");
  return match ? Number(match[1]) : 0;
}

function indentUnderHeadings(root) {
  var kids = Array.prototype.slice.call(root.children);
  for (var i = kids.length - 1; i >= 0; i--) {
    var level = headingLevel(kids[i]);
    if (level < 3) continue;
    var wrap = document.createElement("div");
    wrap.className = level === 3 ? "indent" : "indent-deep";
    var k = i + 1;
    while (k < kids.length && kids[k].parentNode === root && headingLevel(kids[k]) === 0) {
      wrap.appendChild(kids[k]);
      k++;
    }
    if (wrap.childNodes.length) kids[i].insertAdjacentElement("afterend", wrap);
  }
}

function rewriteLinks(root) {
  root.querySelectorAll("a").forEach(function (link) {
    var href = link.getAttribute("href") || "";
    if (!href || href.charAt(0) === "#" || href.indexOf("mailto:") === 0) return;
    var decoded = decodeURIComponent(href.split("#")[0]);
    if (decoded === "Initial Findings.md") {
      link.setAttribute("href", "../findings/");
      return;
    }
    if (decoded === "Physical AI Curriculum.md") {
      link.setAttribute("href", "../curriculum/");
      return;
    }
    if (href.indexOf("http") === 0) {
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferrer");
      return;
    }
    if (href.charAt(0) !== "/") link.setAttribute("href", base + href);
  });
}

fetch(file)
  .then(function (response) {
    if (!response.ok) throw new Error("Could not load the document");
    return response.text();
  })
  .then(function (markdown) {
    doc.innerHTML = marked.parse(markdown);
    indentUnderHeadings(doc);
    rewriteLinks(doc);
    doc.hidden = false;
    document.getElementById("status").remove();
  })
  .catch(function (error) {
    document.getElementById("status").textContent = error.message + ". Open this page from the site root so the markdown file can load.";
  });
