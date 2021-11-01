import { Fragment, useState } from 'react';
import { Dialog, Popover, Tab, Transition } from '@headlessui/react';
import clsx from 'clsx';
import {
  HiOutlineMenu,
  HiOutlineSearch,
  HiOutlineShoppingBag,
  HiOutlineX,
} from 'react-icons/hi';

import Seo from '@/components/Seo';
import Footer from '@/components/Footer';

const navigation = {
  categories: [
    {
      id: 'women',
      name: 'Women',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc:
            'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
          imageAlt:
            'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
        {
          name: 'Basic Tees',
          href: '#',
          imageSrc:
            'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
          imageAlt:
            'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        },
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Clothing',
          items: [
            { name: 'Tops', href: '#' },
            { name: 'Dresses', href: '#' },
            { name: 'Pants', href: '#' },
            { name: 'Denim', href: '#' },
            { name: 'Sweaters', href: '#' },
            { name: 'T-Shirts', href: '#' },
            { name: 'Jackets', href: '#' },
            { name: 'Activewear', href: '#' },
            { name: 'Browse All', href: '#' },
          ],
        },
        {
          id: 'accessories',
          name: 'Accessories',
          items: [
            { name: 'Watches', href: '#' },
            { name: 'Wallets', href: '#' },
            { name: 'Bags', href: '#' },
            { name: 'Sunglasses', href: '#' },
            { name: 'Hats', href: '#' },
            { name: 'Belts', href: '#' },
          ],
        },
        {
          id: 'brands',
          name: 'Brands',
          items: [
            { name: 'Full Nelson', href: '#' },
            { name: 'My Way', href: '#' },
            { name: 'Re-Arranged', href: '#' },
            { name: 'Counterfeit', href: '#' },
            { name: 'Significant Other', href: '#' },
          ],
        },
      ],
    },
    {
      id: 'men',
      name: 'Men',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc:
            'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
          imageAlt:
            'Drawstring top with elastic loop closure and textured interior padding.',
        },
        {
          name: 'Artwork Tees',
          href: '#',
          imageSrc:
            'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
          imageAlt:
            'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
        },
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Clothing',
          items: [
            { name: 'Tops', href: '#' },
            { name: 'Pants', href: '#' },
            { name: 'Sweaters', href: '#' },
            { name: 'T-Shirts', href: '#' },
            { name: 'Jackets', href: '#' },
            { name: 'Activewear', href: '#' },
            { name: 'Browse All', href: '#' },
          ],
        },
        {
          id: 'accessories',
          name: 'Accessories',
          items: [
            { name: 'Watches', href: '#' },
            { name: 'Wallets', href: '#' },
            { name: 'Bags', href: '#' },
            { name: 'Sunglasses', href: '#' },
            { name: 'Hats', href: '#' },
            { name: 'Belts', href: '#' },
          ],
        },
        {
          id: 'brands',
          name: 'Brands',
          items: [
            { name: 'Re-Arranged', href: '#' },
            { name: 'Counterfeit', href: '#' },
            { name: 'Full Nelson', href: '#' },
            { name: 'My Way', href: '#' },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: 'Company', href: '#' },
    { name: 'Stores', href: '#' },
  ],
};

const favorites = [
  {
    id: 1,
    name: 'Black Basic Tee',
    price: '$32',
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/home-page-03-favorite-01.jpg',
    imageAlt: "Model wearing women's black cotton crewneck tee.",
  },
  {
    id: 2,
    name: 'Off-White Basic Tee',
    price: '$32',
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/home-page-03-favorite-02.jpg',
    imageAlt: "Model wearing women's off-white cotton crewneck tee.",
  },
  {
    id: 3,
    name: 'Mountains Artwork Tee',
    price: '$36',
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/home-page-03-favorite-03.jpg',
    imageAlt:
      "Model wearing women's burgundy red crewneck artwork tee with small white triangle overlapping larger black triangle.",
  },
];

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Seo templateTitle='Home' />

      <div className='bg-white'>
        {/* Mobile menu */}
        <Transition.Root show={open} as={Fragment}>
          <Dialog
            as='div'
            className='fixed inset-0 flex z-40 lg:hidden'
            onClose={setOpen}
          >
            <Transition.Child
              as={Fragment}
              enter='transition-opacity ease-linear duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='transition-opacity ease-linear duration-300'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <Dialog.Overlay className='fixed inset-0 bg-black bg-opacity-25' />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter='transition ease-in-out duration-300 transform'
              enterFrom='-translate-x-full'
              enterTo='translate-x-0'
              leave='transition ease-in-out duration-300 transform'
              leaveFrom='translate-x-0'
              leaveTo='-translate-x-full'
            >
              <div className='relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto'>
                <div className='px-4 pt-5 pb-2 flex'>
                  <button
                    type='button'
                    className='-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400'
                    onClick={() => setOpen(false)}
                  >
                    <span className='sr-only'>Close menu</span>
                    <HiOutlineX className='h-6 w-6' aria-hidden='true' />
                  </button>
                </div>

                {/* Links */}
                <Tab.Group as='div' className='mt-2'>
                  <div className='border-b border-gray-200'>
                    <Tab.List className='-mb-px flex px-4 space-x-8'>
                      {navigation.categories.map((category) => (
                        <Tab
                          key={category.name}
                          className={({ selected }) =>
                            clsx(
                              selected
                                ? 'text-indigo-600 border-indigo-600'
                                : 'text-gray-900 border-transparent',
                              'flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium'
                            )
                          }
                        >
                          {category.name}
                        </Tab>
                      ))}
                    </Tab.List>
                  </div>
                  <Tab.Panels as={Fragment}>
                    {navigation.categories.map((category) => (
                      <Tab.Panel
                        key={category.name}
                        className='pt-10 pb-8 px-4 space-y-10'
                      >
                        <div className='grid grid-cols-2 gap-x-4'>
                          {category.featured.map((item) => (
                            <div
                              key={item.name}
                              className='group relative text-sm'
                            >
                              <div className='aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden group-hover:opacity-75'>
                                <img
                                  src={item.imageSrc}
                                  alt={item.imageAlt}
                                  className='object-center object-cover'
                                />
                              </div>
                              <a
                                href={item.href}
                                className='mt-6 block font-medium text-gray-900'
                              >
                                <span
                                  className='absolute z-10 inset-0'
                                  aria-hidden='true'
                                />
                                {item.name}
                              </a>
                              <p aria-hidden='true' className='mt-1'>
                                Shop now
                              </p>
                            </div>
                          ))}
                        </div>
                        {category.sections.map((section) => (
                          <div key={section.name}>
                            <p
                              id={`${category.id}-${section.id}-heading-mobile`}
                              className='font-medium text-gray-900'
                            >
                              {section.name}
                            </p>
                            <ul
                              role='list'
                              aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                              className='mt-6 flex flex-col space-y-6'
                            >
                              {section.items.map((item) => (
                                <li key={item.name} className='flow-root'>
                                  <a
                                    href={item.href}
                                    className='-m-2 p-2 block text-gray-500'
                                  >
                                    {item.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </Tab.Group>

                <div className='border-t border-gray-200 py-6 px-4 space-y-6'>
                  {navigation.pages.map((page) => (
                    <div key={page.name} className='flow-root'>
                      <a
                        href={page.href}
                        className='-m-2 p-2 block font-medium text-gray-900'
                      >
                        {page.name}
                      </a>
                    </div>
                  ))}
                </div>

                <div className='border-t border-gray-200 py-6 px-4 space-y-6'>
                  <div className='flow-root'>
                    <a
                      href='#'
                      className='-m-2 p-2 block font-medium text-gray-900'
                    >
                      Sign in
                    </a>
                  </div>
                  <div className='flow-root'>
                    <a
                      href='#'
                      className='-m-2 p-2 block font-medium text-gray-900'
                    >
                      Create account
                    </a>
                  </div>
                </div>

                <div className='border-t border-gray-200 py-6 px-4'>
                  <a href='#' className='-m-2 p-2 flex items-center'>
                    <img
                      src='https://tailwindui.com/img/flags/flag-canada.svg'
                      alt=''
                      className='w-5 h-auto block flex-shrink-0'
                    />
                    <span className='ml-3 block text-base font-medium text-gray-900'>
                      CAD
                    </span>
                    <span className='sr-only'>, change currency</span>
                  </a>
                </div>
              </div>
            </Transition.Child>
          </Dialog>
        </Transition.Root>

        <header className='relative overflow-hidden'>
          {/* Top navigation */}
          <nav
            aria-label='Top'
            className='relative z-20 bg-white bg-opacity-90 backdrop-filter backdrop-blur-xl'
          >
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
              <div className='h-16 flex items-center'>
                <button
                  type='button'
                  className='bg-white p-2 rounded-md text-gray-400 lg:hidden'
                  onClick={() => setOpen(true)}
                >
                  <span className='sr-only'>Open menu</span>
                  <HiOutlineMenu className='h-6 w-6' aria-hidden='true' />
                </button>

                {/* Logo */}
                <div className='ml-4 flex lg:ml-0'>
                  <a href='#'>
                    <span className='sr-only'>Workflow</span>
                    <img
                      className='h-8 w-auto'
                      src='https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600'
                      alt=''
                    />
                  </a>
                </div>

                {/* Flyout menus */}
                <Popover.Group className='hidden lg:ml-8 lg:block lg:self-stretch'>
                  <div className='h-full flex space-x-8'>
                    {navigation.categories.map((category) => (
                      <Popover key={category.name} className='flex'>
                        {({ open }) => (
                          <>
                            <div className='relative flex'>
                              <Popover.Button
                                className={clsx(
                                  open
                                    ? 'border-indigo-600 text-indigo-600'
                                    : 'border-transparent text-gray-700 hover:text-gray-800',
                                  'relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px'
                                )}
                              >
                                {category.name}
                              </Popover.Button>
                            </div>

                            <Transition
                              as={Fragment}
                              enter='transition ease-out duration-200'
                              enterFrom='opacity-0'
                              enterTo='opacity-100'
                              leave='transition ease-in duration-150'
                              leaveFrom='opacity-100'
                              leaveTo='opacity-0'
                            >
                              <Popover.Panel className='absolute top-full inset-x-0 bg-white text-sm text-gray-500'>
                                {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                                <div
                                  className='absolute inset-0 top-1/2 bg-white shadow'
                                  aria-hidden='true'
                                />
                                {/* Fake border when menu is open */}
                                <div
                                  className='absolute inset-0 top-0 h-px max-w-7xl mx-auto px-8'
                                  aria-hidden='true'
                                >
                                  <div
                                    className={clsx(
                                      open ? 'bg-gray-200' : 'bg-transparent',
                                      'w-full h-px transition-colors ease-out duration-200'
                                    )}
                                  />
                                </div>

                                <div className='relative'>
                                  <div className='max-w-7xl mx-auto px-8'>
                                    <div className='grid grid-cols-2 gap-y-10 gap-x-8 py-16'>
                                      <div className='col-start-2 grid grid-cols-2 gap-x-8'>
                                        {category.featured.map((item) => (
                                          <div
                                            key={item.name}
                                            className='group relative text-base sm:text-sm'
                                          >
                                            <div className='aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden group-hover:opacity-75'>
                                              <img
                                                src={item.imageSrc}
                                                alt={item.imageAlt}
                                                className='object-center object-cover'
                                              />
                                            </div>
                                            <a
                                              href={item.href}
                                              className='mt-6 block font-medium text-gray-900'
                                            >
                                              <span
                                                className='absolute z-10 inset-0'
                                                aria-hidden='true'
                                              />
                                              {item.name}
                                            </a>
                                            <p
                                              aria-hidden='true'
                                              className='mt-1'
                                            >
                                              Shop now
                                            </p>
                                          </div>
                                        ))}
                                      </div>
                                      <div className='row-start-1 grid grid-cols-3 gap-y-10 gap-x-8 text-sm'>
                                        {category.sections.map((section) => (
                                          <div key={section.name}>
                                            <p
                                              id={`${section.name}-heading`}
                                              className='font-medium text-gray-900'
                                            >
                                              {section.name}
                                            </p>
                                            <ul
                                              role='list'
                                              aria-labelledby={`${section.name}-heading`}
                                              className='mt-6 space-y-6 sm:mt-4 sm:space-y-4'
                                            >
                                              {section.items.map((item) => (
                                                <li
                                                  key={item.name}
                                                  className='flex'
                                                >
                                                  <a
                                                    href={item.href}
                                                    className='hover:text-gray-800'
                                                  >
                                                    {item.name}
                                                  </a>
                                                </li>
                                              ))}
                                            </ul>
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </Popover.Panel>
                            </Transition>
                          </>
                        )}
                      </Popover>
                    ))}

                    {navigation.pages.map((page) => (
                      <a
                        key={page.name}
                        href={page.href}
                        className='flex items-center text-sm font-medium text-gray-700 hover:text-gray-800'
                      >
                        {page.name}
                      </a>
                    ))}
                  </div>
                </Popover.Group>

                <div className='ml-auto flex items-center'>
                  <div className='hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6'>
                    <a
                      href='#'
                      className='text-sm font-medium text-gray-700 hover:text-gray-800'
                    >
                      Sign in
                    </a>
                    <span className='h-6 w-px bg-gray-200' aria-hidden='true' />
                    <a
                      href='#'
                      className='text-sm font-medium text-gray-700 hover:text-gray-800'
                    >
                      Create account
                    </a>
                  </div>

                  <div className='hidden lg:ml-8 lg:flex'>
                    <a
                      href='#'
                      className='text-gray-700 hover:text-gray-800 flex items-center'
                    >
                      <img
                        src='https://tailwindui.com/img/flags/flag-canada.svg'
                        alt=''
                        className='w-5 h-auto block flex-shrink-0'
                      />
                      <span className='ml-3 block text-sm font-medium'>
                        CAD
                      </span>
                      <span className='sr-only'>, change currency</span>
                    </a>
                  </div>

                  {/* Search */}
                  <div className='flex lg:ml-6'>
                    <a
                      href='#'
                      className='p-2 text-gray-400 hover:text-gray-500'
                    >
                      <span className='sr-only'>Search</span>
                      <HiOutlineSearch className='w-6 h-6' aria-hidden='true' />
                    </a>
                  </div>

                  {/* Cart */}
                  <div className='ml-4 flow-root lg:ml-6'>
                    <a href='#' className='group -m-2 p-2 flex items-center'>
                      <HiOutlineShoppingBag
                        className='flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500'
                        aria-hidden='true'
                      />
                      <span className='ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800'>
                        0
                      </span>
                      <span className='sr-only'>items in cart, view bag</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </nav>

          {/* Hero section */}
          <div className='pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48'>
            <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static'>
              <div className='sm:max-w-lg'>
                <h1 className='text-4xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl'>
                  Summer styles are finally here
                </h1>
                <p className='mt-4 text-xl text-gray-500'>
                  This year, our new summer collection will shelter you from the
                  harsh elements of a world that doesn&apos;t care if you live
                  or die.
                </p>
              </div>
              <div>
                <div className='mt-10'>
                  {/* Decorative image grid */}
                  <div
                    aria-hidden='true'
                    className='pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full'
                  >
                    <div className='absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8'>
                      <div className='flex items-center space-x-6 lg:space-x-8'>
                        <div className='flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8'>
                          <div className='w-44 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100'>
                            <img
                              src='https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg'
                              alt=''
                              className='w-full h-full object-center object-cover'
                            />
                          </div>
                          <div className='w-44 h-64 rounded-lg overflow-hidden'>
                            <img
                              src='https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg'
                              alt=''
                              className='w-full h-full object-center object-cover'
                            />
                          </div>
                        </div>
                        <div className='flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8'>
                          <div className='w-44 h-64 rounded-lg overflow-hidden'>
                            <img
                              src='https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg'
                              alt=''
                              className='w-full h-full object-center object-cover'
                            />
                          </div>
                          <div className='w-44 h-64 rounded-lg overflow-hidden'>
                            <img
                              src='https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg'
                              alt=''
                              className='w-full h-full object-center object-cover'
                            />
                          </div>
                          <div className='w-44 h-64 rounded-lg overflow-hidden'>
                            <img
                              src='https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg'
                              alt=''
                              className='w-full h-full object-center object-cover'
                            />
                          </div>
                        </div>
                        <div className='flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8'>
                          <div className='w-44 h-64 rounded-lg overflow-hidden'>
                            <img
                              src='https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg'
                              alt=''
                              className='w-full h-full object-center object-cover'
                            />
                          </div>
                          <div className='w-44 h-64 rounded-lg overflow-hidden'>
                            <img
                              src='https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg'
                              alt=''
                              className='w-full h-full object-center object-cover'
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <a
                    href='#'
                    className='inline-block text-center bg-indigo-600 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-indigo-700'
                  >
                    Shop Collection
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main>
          {/* Featured section */}
          <section aria-labelledby='cause-heading'>
            <div className='relative bg-gray-800 py-32 px-6 sm:py-40 sm:px-12 lg:px-16'>
              <div className='absolute inset-0 overflow-hidden'>
                <img
                  src='https://tailwindui.com/img/ecommerce-images/home-page-03-feature-section-full-width.jpg'
                  alt=''
                  className='w-full h-full object-center object-cover'
                />
              </div>
              <div
                aria-hidden='true'
                className='absolute inset-0 bg-gray-900 bg-opacity-50'
              />
              <div className='relative max-w-3xl mx-auto flex flex-col items-center text-center'>
                <h2
                  id='cause-heading'
                  className='text-3xl font-extrabold tracking-tight text-white sm:text-4xl'
                >
                  Long-term thinking
                </h2>
                <p className='mt-3 text-xl text-white'>
                  We&apos;re committed to responsible, sustainable, and ethical
                  manufacturing. Our small-scale approach allows us to focus on
                  quality and reduce our impact. We&apos;re doing our best to
                  delay the inevitable heat-death of the universe.
                </p>
                <a
                  href='#'
                  className='mt-8 w-full block bg-white border border-transparent rounded-md py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto'
                >
                  Read our story
                </a>
              </div>
            </div>
          </section>

          {/* Favorites section */}
          <section aria-labelledby='favorites-heading'>
            <div className='max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8'>
              <div className='sm:flex sm:items-baseline sm:justify-between'>
                <h2
                  id='favorites-heading'
                  className='text-2xl font-extrabold tracking-tight text-gray-900'
                >
                  Our Favorites
                </h2>
                <a
                  href='#'
                  className='hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block'
                >
                  Browse all favorites<span aria-hidden='true'> &rarr;</span>
                </a>
              </div>

              <div className='mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-3 sm:gap-y-0 sm:gap-x-6 lg:gap-x-8'>
                {favorites.map((favorite) => (
                  <div key={favorite.id} className='group relative'>
                    <div className='w-full h-96 rounded-lg overflow-hidden group-hover:opacity-75 sm:h-auto sm:aspect-w-2 sm:aspect-h-3'>
                      <img
                        src={favorite.imageSrc}
                        alt={favorite.imageAlt}
                        className='w-full h-full object-center object-cover'
                      />
                    </div>
                    <h3 className='mt-4 text-base font-semibold text-gray-900'>
                      <a href={favorite.href}>
                        <span className='absolute inset-0' />
                        {favorite.name}
                      </a>
                    </h3>
                    <p className='mt-1 text-sm text-gray-500'>
                      {favorite.price}
                    </p>
                  </div>
                ))}
              </div>

              <div className='mt-6 sm:hidden'>
                <a
                  href='#'
                  className='block text-sm font-semibold text-indigo-600 hover:text-indigo-500'
                >
                  Browse all favorites<span aria-hidden='true'> &rarr;</span>
                </a>
              </div>
            </div>
          </section>

          {/* CTA section */}
          <section aria-labelledby='sale-heading'>
            <div className='pt-32 overflow-hidden sm:pt-14'>
              <div className='bg-gray-800'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                  <div className='relative pt-48 pb-16 sm:pb-24'>
                    <div>
                      <h2
                        id='sale-heading'
                        className='text-4xl font-extrabold tracking-tight text-white md:text-5xl'
                      >
                        Final Stock.
                        <br />
                        Up to 50% off.
                      </h2>
                      <div className='mt-6 text-base'>
                        <a href='#' className='font-semibold text-white'>
                          Shop the sale<span aria-hidden='true'> &rarr;</span>
                        </a>
                      </div>
                    </div>

                    <div className='absolute -top-32 left-1/2 transform -translate-x-1/2 sm:top-6 sm:translate-x-0'>
                      <div className='ml-24 flex space-x-6 min-w-max sm:ml-3 lg:space-x-8'>
                        <div className='flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8'>
                          <div className='flex-shrink-0'>
                            <img
                              className='h-64 w-64 rounded-lg object-cover md:h-72 md:w-72'
                              src='https://tailwindui.com/img/ecommerce-images/home-page-03-category-01.jpg'
                              alt=''
                            />
                          </div>

                          <div className='mt-6 flex-shrink-0 sm:mt-0'>
                            <img
                              className='h-64 w-64 rounded-lg object-cover md:h-72 md:w-72'
                              src='https://tailwindui.com/img/ecommerce-images/home-page-03-category-02.jpg'
                              alt=''
                            />
                          </div>
                        </div>
                        <div className='flex space-x-6 sm:-mt-20 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8'>
                          <div className='flex-shrink-0'>
                            <img
                              className='h-64 w-64 rounded-lg object-cover md:h-72 md:w-72'
                              src='https://tailwindui.com/img/ecommerce-images/home-page-03-favorite-01.jpg'
                              alt=''
                            />
                          </div>

                          <div className='mt-6 flex-shrink-0 sm:mt-0'>
                            <img
                              className='h-64 w-64 rounded-lg object-cover md:h-72 md:w-72'
                              src='https://tailwindui.com/img/ecommerce-images/home-page-03-favorite-02.jpg'
                              alt=''
                            />
                          </div>
                        </div>
                        <div className='flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8'>
                          <div className='flex-shrink-0'>
                            <img
                              className='h-64 w-64 rounded-lg object-cover md:h-72 md:w-72'
                              src='https://tailwindui.com/img/ecommerce-images/home-page-03-category-01.jpg'
                              alt=''
                            />
                          </div>

                          <div className='mt-6 flex-shrink-0 sm:mt-0'>
                            <img
                              className='h-64 w-64 rounded-lg object-cover md:h-72 md:w-72'
                              src='https://tailwindui.com/img/ecommerce-images/home-page-03-category-02.jpg'
                              alt=''
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
