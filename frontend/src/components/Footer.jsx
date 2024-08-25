const Footer = () => {
  return (
    <footer class="flex flex-col items-center text-center text-surface bg-black text-white lg:text-left">
      <div class="container p-6">
        <div class="grid place-items-center md:grid-cols-2 lg:grid-cols-3">
          <div class="mb-2">
            <ul class="mb-0 list-none">
              <li>
                <a href="#!">Featured Blog</a>
              </li>
              <li>
                <a href="#!">Most Viewed</a>
              </li>
              <li>
                <a href="#!">Readers Choice</a>
              </li>
            </ul>
          </div>

          <div class="mb-4">
            <ul class="mb-0 list-none">
              <li>
                <a href="#!">Forum</a>
              </li>
              <li>
                <a href="#!">Support</a>
              </li>
              <li>
                <a href="#!">Recent Posts</a>
              </li>
            </ul>
          </div>

          <div class="mb-4">
            <ul class="mb-0 list-none">
              <li>
                <a href="#!">Privacy Policy</a>
              </li>
              <li>
                <a href="#!">About Us</a>
              </li>
              <li>
                <a href="#!">Terms & Conditions</a>
              </li>
              <li>
                <a href="#!">Terms of Services</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="w-full bg-black text-center">
        All Rights Reserved @Mini Blog 2024 by sarulathamanoharan
      </div>
    </footer>
  );
};

export default Footer;
