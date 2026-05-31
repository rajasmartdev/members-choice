(function() {
            // FAQ-specific JavaScript: handle contact form submission with clear indication
            const faqForm = document.getElementById('faqContactForm');
            if (faqForm) {
                faqForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    // Show a friendly FAQ-style alert
                    alert('Thank you for your question! Our team will respond to your FAQ inquiry shortly.');
                    faqForm.reset();
                });
            }

            // Partnership button alert - FAQ related partnership interest
            const partnershipBtn = document.getElementById('faqPartnershipBtn');
            if (partnershipBtn) {
                partnershipBtn.addEventListener('click', function() {
                    alert('Thanks for your interest in partnerships! A specialist will reach out within 2 business days.');
                });
            }

            // Optional: add subtle console log for FAQ section readiness (just for confirmation)
            console.log('FAQ section fully loaded — all class names customized for FAQ component.');
        })();



         // toggle FAQ group open/close
  function toggleGroup(header) {
    const chevron = header.querySelector('.claim-faq-group-chevron');
    const group   = header.closest('.claim-faq-group');
    const items   = group.querySelectorAll('.claim-faq-item');
    const isOpen  = chevron.classList.contains('open');

    chevron.classList.toggle('open', !isOpen);
    items.forEach(item => item.style.display = isOpen ? 'none' : '');
  }

  // toggle individual Q&A
  function toggleItem(questionEl) {
    const answer  = questionEl.nextElementSibling;
    const chevron = questionEl.querySelector('.claim-faq-chevron');
    const isOpen  = answer.classList.contains('open');

    answer.classList.toggle('open', !isOpen);
    chevron.classList.toggle('open', !isOpen);
  }