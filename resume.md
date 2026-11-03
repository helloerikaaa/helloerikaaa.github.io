---
title: Résumé
permalink: /resume/
---

<p class="no-print"><button class="btn btn-default btn-ghost" onclick="window.print()">save as PDF</button></p>

## EXPERIENCE

{% for job in site.data.resume.experience %}
<div class="resume-item">
  <div class="ri-head">
    <strong>{{ job.role }} @ {{job.org}}</strong>
    <span class="ri-dates">{{ job.from }} – {{ job.to }}</span>
  </div>
<ul>{% for b in job.bullets %}<li>{{ b }}</li>{% endfor %}</ul>
</div>
{% endfor %}

## RESEARCH STAYS

{% for stay in site.data.resume.stays %}
<div class="resume-item">
  <div class="ri-head">
    <strong>{{ stay.org }}</strong>
    <span class="ri-dates">{{ stay.from }} - {{ stay.to }}</span>
  </div>
  <span>{{ stay.location }}</span>
</div>
{% endfor %}

## EDUCATION

{% for e in site.data.resume.education %}
<div class="resume-item">
  <div class="ri-head">
    <strong>{{ e.degree }}</strong> — {{ e.school }}
    <span class="ri-dates">{{ e.from }} – {{ e.to }}</span>
  </div>
</div>
{% endfor %}

## SKILLS

<table class="skills"><tbody>
{%- for s in site.data.resume.skills %}
<tr><th>{{ s.area }}</th><td>{{ s.items | join: " · " }}</td></tr>
{%- endfor %}
</tbody></table>

## SEE ALSO

[projects]({{ '/projects/' | relative_url }}), [talks]({{ '/talks/' | relative_url }}), [blog]({{ '/blog/' | relative_url }})
