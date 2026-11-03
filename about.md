---
title: About
permalink: /about/
---

Hi! I’m Erika Sánchez-Femat. I’m a PhD student in Applied Artificial Intelligence at Universidad Autónoma de Zacatecas, where I work on image processing and machine learning for medical imaging under the supervision of Dr. José María Celaya Padilla. My background is in Computer Science Engineering, and I came to imaging through my bachelor’s thesis, where I worked with images of colony-forming units (CFUs).

What draws me to this field is a simple question: how do we get reliable information out of images that are noisy, imperfect, or incomplete? Whether an image comes from a mammograph, a telescope, or a microscope, it’s formed by counting photons, and it carries the same kinds of noise and uncertainty. That shared foundation is what interests me most, and it’s why I think of myself as an imaging scientist rather than a specialist in a single application.

Current research. My PhD focuses on breast cancer imaging. I develop image processing pipelines and multimodal models to classify possible breast cancer cases from incomplete studies, combining X-ray images, BI-RADS reports, and radiomics features. In real clinical settings, studies are often missing views, reports, or other information, so building models that remain useful under those conditions is a central part of my work.

Astronomy and other domains. I’m currently expanding my work toward astronomical imaging, where many of the same challenges appear. Separating faint signals from noise and complex backgrounds is a problem in both astronomy and medicine, and methods developed in one field often transfer to the other. Having started with biological images, I’m also interested in bringing these ideas back to biology and microscopy, and I’m open to collaborations wherever imaging meets a new domain.

## Interests

- Imaging science and image processing
- Noise modeling and denoising
- Medical image analysis and radiomics
- Multimodal learning with incomplete data
- Breast cancer imaging
- Astronomical imaging
- Bioimage informatics and microscopy
- Computer vision for robotics


## Contact

The fastest way to reach me is by [email](mailto:{{ site.author.email }}).
I'm also on {% for s in site.social %}{% unless s.name == "email" %}[{{ s.name }}]({{ s.url }}){% unless forloop.last %}, {% endunless %}{% endunless %}{% endfor %}.
