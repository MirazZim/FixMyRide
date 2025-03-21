import React from 'react';
import Link from 'next/link';

const AdminLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-100 border-4 text-gray-800 p-6">
        <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
        <nav>
          <ul>
            <li className="mb-4">
              <Link href="/admin" className="hover:text-gray-300">Dashboard</Link>
            </li>
            <li className="mb-4">
              <Link href="/admin/users" className="hover:text-gray-300">Users</Link>
            </li>
            <li className="mb-4">
              <Link href="/admin/content" className="hover:text-gray-300">Content</Link>
            </li>
            <li>
              <Link href="/admin/settings" className="hover:text-gray-300">Settings</Link>
            </li>
            <div className='divider text-color-white'></div>
            <li>
              <Link href="/" className="hover:text-gray-300">Home</Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-100">
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;