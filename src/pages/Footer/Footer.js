import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div>
            <footer class="footer py-5 bg-dark">
                <div class="w-50 mx-auto text-center py-5">
                    <div class=" mb-4">
                        <i class="fab fa-facebook-f"></i>
                        <i class="fab fa-twitter"></i>
                        <i class="fab fa-google-plus-g"></i>
                        <i class="fab fa-linkedin-in"></i>
                        <i class="fab fa-instagram"></i>
                        <i class="fas fa-envelope"></i>
                    </div>
                    <p class="text-muted">© 2021 MegaOne. made with love by themesindustry</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;