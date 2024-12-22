// Basic JavaScript functionality
document.addEventListener("DOMContentLoaded", function () {
  console.log("Grassroots Radio Advocates Website Loaded");
});

{% if page.categories %}
  <p>Categories: 
    {% for category in page.categories %}
      <a href="/categories/{{ category | slugify }}">{{ category }}</a>{% if forloop.last == 
false %}, {% endif %}
    {% endfor %}
  </p>
{% endif %}