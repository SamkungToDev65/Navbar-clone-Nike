import React, { useState } from 'react';
import logo from './logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHeart, faShoppingBag, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow font-kanit">
      <div className="container mx-auto px-4 py-2">
      <div className="hidden lg:flex justify-end space-x-4 mt-2 md:mt-0">
          <a href="#store" className="text-gray-800 hover:text-gray-600">ค้นหาร้าน</a>
          <a href="#help" className="text-gray-800 hover:text-gray-600"> | &nbsp;&nbsp; ความช่วยเหลือ</a> 
          <a href="#join" className="text-gray-800 hover:text-gray-600"> | &nbsp;&nbsp; เข้าร่วมกับเรา</a>
          <a href="#signin" className="text-gray-800 hover:text-gray-600"> | &nbsp;&nbsp; ลงชื่อเข้าใช้</a>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img src={logo} className="h-24 w-24" alt="Logo" />
            <div className="hidden lg:flex space-x-4">
              <a href="#home" className="text-gray-800 hover:text-gray-600">ใหม่และโดดเด่น</a>
              <a href="#men" className="text-gray-800 hover:text-gray-600">ผู้ชาย</a>
              <a href="#women" className="text-gray-800 hover:text-gray-600">ผู้หญิง</a>
              <a href="#kids" className="text-gray-800 hover:text-gray-600">เด็ก</a>
              <a href="#sale" className="text-gray-800 hover:text-gray-600">ลดราคา</a>
              <a href="#customize" className="text-gray-800 hover:text-gray-600">ออกแบบเองกับ</a>
              <a href="#snkrs" className="text-gray-800 hover:text-gray-600">SNKRS</a>
            </div>
          </div>
          <div className="hidden lg:flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="ค้นหา"
                className="bg-gray-100 rounded-full pl-4 pr-8 py-1 text-sm focus:outline-none"
              />
              <FontAwesomeIcon icon={faSearch} className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-500" />
            </div>
            <FontAwesomeIcon icon={faHeart} className="text-gray-800 hover:text-gray-600" />
            <FontAwesomeIcon icon={faShoppingBag} className="text-gray-800 hover:text-gray-600" />
          </div>
          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 focus:outline-none">
              <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
            </button>
          </div>
        </div>
        <div className={`mt-2 lg:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <a href="#home" className="block text-gray-800 hover:text-gray-600 mt-2">ใหม่และโดดเด่น</a>
          <a href="#men" className="block text-gray-800 hover:text-gray-600 mt-2">ผู้ชาย</a>
          <a href="#women" className="block text-gray-800 hover:text-gray-600 mt-2">ผู้หญิง</a>
          <a href="#kids" className="block text-gray-800 hover:text-gray-600 mt-2">เด็ก</a>
          <a href="#sale" className="block text-gray-800 hover:text-gray-600 mt-2">ลดราคา</a>
          <a href="#customize" className="block text-gray-800 hover:text-gray-600 mt-2">ออกแบบเองกับ</a>
          <a href="#snkrs" className="block text-gray-800 hover:text-gray-600 mt-2">SNKRS</a>
          <div className="mt-4">
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="ค้นหา"
                className="w-full bg-gray-100 rounded-full pl-4 pr-8 py-1 text-sm focus:outline-none"
              />
              <FontAwesomeIcon icon={faSearch} className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-500" />
            </div>
            <div className="flex justify-around">
              <FontAwesomeIcon icon={faHeart} className="text-gray-800 hover:text-gray-600" />
              <FontAwesomeIcon icon={faShoppingBag} className="text-gray-800 hover:text-gray-600" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
