// 1. Preloader Logic
    window.addEventListener('load', () => {
      const progressBar = document.getElementById('loader-progress');
      const preloader = document.getElementById('preloader');
      
      if (progressBar) progressBar.style.width = '100%';
      
      setTimeout(() => {
        if (preloader) {
          preloader.style.opacity = '0';
          setTimeout(() => preloader.style.display = 'none', 500);
        }
      }, 650);
    });

    // 2. Set Dynamic Year
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // 3. Scroll Progress Bar
    window.addEventListener('scroll', () => {
      const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      const bar = document.getElementById('scroll-progress');
      if (bar) bar.style.width = scrolled + '%';
    });

    // 4. Custom Cursor Glow Follower
    const cursor = document.getElementById('cursor-glow');
    if (cursor && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
      });
    }

    // 5. Typewriter Effect
    const roles = ["AI/ML Engineer", "Automation Builder", "Full-Stack Developer", "n8n Specialist"];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typewriterEl = document.getElementById('typewriter');

    function type() {
      if (!typewriterEl) return;
      const currentRole = roles[roleIndex];
      
      if (isDeleting) {
        typewriterEl.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
      } else {
        typewriterEl.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
      }

      let speed = isDeleting ? 40 : 100;

      if (!isDeleting && charIndex === currentRole.length) {
        speed = 2000;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        speed = 400;
      }

      setTimeout(type, speed);
    }
    type();

    // 8. Animated Number Counter on Scroll
    const counters = document.querySelectorAll('.stat-counter');
    let hasAnimatedCounters = false;

    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasAnimatedCounters) {
          hasAnimatedCounters = true;
          counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            let count = 0;
            const inc = target / 30;
            const updateCount = () => {
              count += inc;
              if (count < target) {
                counter.innerText = Math.ceil(count);
                setTimeout(updateCount, 40);
              } else {
                counter.innerText = target;
              }
            };
            updateCount();
          });
        }
      });
    }, { threshold: 0.5 });

    if (counters.length > 0) {
      counterObserver.observe(counters[0]);
    }

    // 9. Interactive Neural Canvas in Hero
    const canvas = document.getElementById('neural-canvas');
    if (canvas && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const ctx = canvas.getContext('2d');
      let width, height;
      let particles = [];

      function resizeCanvas() {
        width = canvas.width = canvas.parentElement.offsetWidth;
        height = canvas.height = canvas.parentElement.offsetHeight;
      }
      resizeCanvas();
      window.addEventListener('resize', resizeCanvas);

      class Particle {
        constructor() {
          this.x = Math.random() * width;
          this.y = Math.random() * height;
          this.vx = (Math.random() - 0.5) * 0.7;
          this.vy = (Math.random() - 0.5) * 0.7;
          this.radius = Math.random() * 2 + 1;
        }
        update() {
          this.x += this.vx;
          this.y += this.vy;
          if (this.x < 0 || this.x > width) this.vx *= -1;
          if (this.y < 0 || this.y > height) this.vy *= -1;
        }
        draw() {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
          ctx.fillStyle = '#06b6d4';
          ctx.fill();
        }
      }

      const particleCount = Math.min(width > 768 ? 45 : 20, 50);
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }

      function renderNeural() {
        ctx.clearRect(0, 0, width, height);
        for (let i = 0; i < particles.length; i++) {
          particles[i].update();
          particles[i].draw();
          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 120) {
              ctx.beginPath();
              ctx.strokeStyle = `rgba(124, 58, 237, ${0.15 * (1 - dist / 120)})`;
              ctx.lineWidth = 1;
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.stroke();
            }
          }
        }
        requestAnimationFrame(renderNeural);
      }
      renderNeural();
    }

    // 10. Skills Filter Functionality
    const skillBtns = document.querySelectorAll('.skill-tab-btn');
    const skillCards = document.querySelectorAll('.skill-card');

    skillBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        skillBtns.forEach(b => {
          b.classList.remove('bg-gradient-to-r', 'from-violet-600', 'to-cyan-500', 'text-white', 'font-bold');
          b.classList.add('glass-card', 'text-slate-300');
        });
        btn.classList.add('bg-gradient-to-r', 'from-violet-600', 'to-cyan-500', 'text-white', 'font-bold');
        btn.classList.remove('glass-card', 'text-slate-300');

        const filter = btn.getAttribute('data-filter');
        skillCards.forEach(card => {
          if (filter === 'all' || card.getAttribute('data-category') === filter) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });

    // 11. Projects Filter Functionality
    const projBtns = document.querySelectorAll('.proj-filter-btn');
    const projCards = document.querySelectorAll('.project-card');

    projBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        projBtns.forEach(b => {
          b.classList.remove('bg-gradient-to-r', 'from-violet-600', 'to-cyan-500', 'text-white', 'font-bold');
          b.classList.add('glass-card', 'text-slate-300');
        });
        btn.classList.add('bg-gradient-to-r', 'from-violet-600', 'to-cyan-500', 'text-white', 'font-bold');
        btn.classList.remove('glass-card', 'text-slate-300');

        const filter = btn.getAttribute('data-filter');
        projCards.forEach(card => {
          const category = card.getAttribute('data-category');
          if (filter === 'all' || category.includes(filter)) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });

    // 12. Workflow Modal functions
    function openWorkflowModal() {
      const modal = document.getElementById('workflow-modal');
      if (modal) modal.classList.remove('hidden');
    }
    function closeWorkflowModal() {
      const modal = document.getElementById('workflow-modal');
      if (modal) modal.classList.add('hidden');
    }

    // 13. Contact Form Submission Handling with feedback
    const form = document.getElementById('contact-form');
    const statusDiv = document.getElementById('form-status');
    const submitBtn = document.getElementById('submit-btn');

    function showFormStatus(kind, html) {
      statusDiv.classList.remove('hidden', 'bg-rose-950/60', 'text-rose-300', 'border-rose-500/30', 'bg-emerald-950/60', 'text-emerald-300', 'border-emerald-500/30', 'bg-amber-950/60', 'text-amber-200', 'border-amber-500/30');
      statusDiv.classList.add('border');
      if (kind === 'ok') {
        statusDiv.classList.add('bg-emerald-950/60', 'text-emerald-300', 'border-emerald-500/30');
      } else if (kind === 'wait') {
        statusDiv.classList.add('bg-amber-950/60', 'text-amber-200', 'border-amber-500/30');
      } else {
        statusDiv.classList.add('bg-rose-950/60', 'text-rose-300', 'border-rose-500/30');
      }
      statusDiv.innerHTML = html;
    }

    if (form) {
      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const originalBtn = `<span>Send Message</span> <i class="fa-solid fa-paper-plane text-xs"></i>`;
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<span>Sending...</span> <i class="fa-solid fa-spinner animate-spin text-xs"></i>`;

        try {
          const subject = form.subject.value.trim();
          const response = await fetch('https://formsubmit.co/ajax/omshejwalfornda@gmail.com', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            body: JSON.stringify({
              name: form.name.value.trim(),
              email: form.email.value.trim(),
              subject: subject,
              message: form.message.value.trim(),
              _subject: subject || 'New message from Om Shejwal portfolio',
              _template: 'table',
              _captcha: 'false',
              _honey: ''
            })
          });

          const data = await response.json().catch(() => ({}));
          const detail = data.message || '';

          if (response.ok && String(data.success) === 'true') {
            showFormStatus('ok', `<i class="fa-solid fa-circle-check mr-2"></i> Message sent successfully. Om will get back to you shortly.`);
            form.reset();
          } else if (/activ/i.test(detail)) {
            showFormStatus('wait', `<i class="fa-solid fa-envelope mr-2"></i> One-time setup: open <strong>omshejwalfornda@gmail.com</strong> and click <strong>Activate Form</strong>. Your message is saved and will be delivered after that.`);
          } else {
            throw new Error(detail || 'Submission failed');
          }
        } catch (err) {
          showFormStatus('err', `<i class="fa-solid fa-triangle-exclamation mr-2"></i> Could not send right now. Please mail <a href="mailto:omshejwalfornda@gmail.com" class="underline font-bold">omshejwalfornda@gmail.com</a> directly.`);
        } finally {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalBtn;
        }
      });
    }
