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