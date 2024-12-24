import React from 'react';

const Resources = () => {
  return (
    <div className="bg-white text-gray-600 py-8">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-xl font-semibold mb-4">Resources</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Column 1 */}
          <div>
            <h3 className="font-medium">Find A Store</h3>
            <ul>
              <li><a href="#" className="hover:text-black">Become A Member</a></li>
              <li><a href="#" className="hover:text-black">Send Us Feedback</a></li>
              <li><a href="#" className="hover:text-black">Help</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-medium">Get Help</h3>
            <ul>
              <li><a href="#" className="hover:text-black">Order Status</a></li>
              <li><a href="#" className="hover:text-black">Delivery</a></li>
              <li><a href="#" className="hover:text-black">Returns</a></li>
              <li><a href="#" className="hover:text-black">Payment Options</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-medium">Contact Us</h3>
            <ul>
              <li><a href="#" className="hover:text-black">Nike.com Inquiries</a></li>
              <li><a href="#" className="hover:text-black">All Other Inquiries</a></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="font-medium">Company</h3>
            <ul>
              <li><a href="#" className="hover:text-black">About Nike</a></li>
              <li><a href="#" className="hover:text-black">News</a></li>
              <li><a href="#" className="hover:text-black">Careers</a></li>
              <li><a href="#" className="hover:text-black">Investors</a></li>
              <li><a href="#" className="hover:text-black">Sustainability</a></li>
              <li><a href="#" className="hover:text-black">Report a Concern</a></li>
            </ul>
          </div>

          {/* Column 5 */}
          <div>
            <h3 className="font-medium">India</h3>
            <ul>
              <li><a href="#" className="hover:text-black">India</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
