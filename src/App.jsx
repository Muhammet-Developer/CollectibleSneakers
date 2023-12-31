import React, { useState } from 'react';

const App = () => {
  return (
    <>
      <header className='bg-[#FEFBED]'>
        <nav className='h-24 w-full flex justify-between items-center px-20 sm:px-5'>
          <a class=' text-[#78350F] text-4xl font-medium' href='#'>
            Collers
          </a>
          <div className='flex lg:hidden'>
            <ul className='flex text-[#78350F] text-base font-bold gap-10 items-center'>
              <li>
                <a href='#'>Products</a>
              </li>
              <li>
                <a href='#'>Solutions</a>
              </li>
              <li>
                <a href='#'>Piricing</a>
              </li>
              <li>
                <a href='#'>Resources</a>
              </li>
              <li>
                <a href='#'>Log in</a>
              </li>
            </ul>
            <div class='flex items-center  ml-10'>
              <div class='w-[149px]  border-[#78350F] text-center border-2	radius-full py-2 rounded-[8px]'>
                <a href='#' className='text-[#78350F] text-base font-medium '>
                  Sign up Now
                </a>
              </div>
            </div>
          </div>
          <div className='hidden lg:inline'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='25'
              viewBox='0 0 24 25'
              fill='none'
            >
              <path
                d='M21 5.5H13'
                stroke='#78350F'
                stroke-width='1.5'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <path
                d='M21 12.5H8'
                stroke='#78350F'
                stroke-width='1.5'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <path
                d='M21 19.5H3'
                stroke='#78350F'
                stroke-width='1.5'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </svg>
          </div>
        </nav>
      </header>

      <section className='bg-[linear-gradient(-27deg,#FEF3C7_50%,#FFFBED_50%)] '>
        <div className='min-h-[583px] mt-[-30px]  '>
          <div className='  px-[80px] py-[80px] sm:py-8 flex justify-around items-center lg:flex-col xs:px-6 sm:px-6 md:px-6'>
            <div className='min-h-[220px] max-w-[700px] mt-[130px] lg:mt-[50px] '>
              <p className='text-black text-[52px] md:text-[72px] font-bold xs:text-[20px]'>
                Collectible Sneakers
              </p>
              <p className='mt-[32px] xs:text-center'>
                Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
                suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum
                ultrices amet.
              </p>
              <div className='flex mt-[32px] xs:justify-center sm:justify-center'>
                <div className='w-[149px] border border-[#78350F] text-center border-2 radius-full py-2 rounded-[8px]'>
                  <a className='hover:text-gray-500 text-[#78350F]' href='#'>
                    Sign up Now
                  </a>
                </div>
                <div className='w-[149px]  text-center py-2 flex '>
                  <img
                    src='/image/play-circle.svg'
                    alt='play'
                    className='ml-[24px] '
                  />
                  <a className='hover:text-gray-500' href='#'>
                    Watch Demo
                  </a>
                </div>
              </div>
            </div>
            <div className='ml-10 mt-8  sm:mx-auto lg:mt-[130px] xl:mt-0 '>
              <img src='/image/shoes.svg' alt='' className='xs:mt-10 ' />
            </div>
          </div>
        </div>
        <div className='min-h-[365px]  mx-auto px-[80px] py-[80px] xs:px-6 sm:px-6 md:px-6'>
          <div className=' min-h-[205px] grid grid-cols-3 md:grid-cols-1 place-items-center'>
            <div className='max-w-[373px]   min-h-[205px] relative  md:text-start'>
              <div className='absolute left-6 md:left-[50%] mx-start '>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='57'
                  height='39'
                  viewBox='0 0 57 39'
                  fill='none'
                >
                  <path
                    opacity='0.5'
                    d='M3.07107 17.4973C-3.22858 11.1977 1.23308 0.42627 10.1421 0.42627H46.7107C55.6197 0.42627 60.0814 11.1977 53.7817 17.4973L35.4975 35.7816C31.5922 39.6868 25.2606 39.6868 21.3553 35.7816L3.07107 17.4973Z'
                    fill='#0369A1'
                  />
                </svg>
              </div>
              <img
                src='/image/trophy.svg'
                alt='trophy'
                className='md:ml-[43%] ml-0'
              />
              <p className='text-xl font-semibold mt-[16px] mb-[16px] md:text-center'>
                Nibh viverra
              </p>
              <p className='text-lg not-italic font-normal leading-7 md:text-center'>
                Sit bibendum donec dolor fames neque vulputate non sit aliquam.
                Consequat turpis natoque leo, massa.{' '}
              </p>
            </div>
            <div className='max-w-[373px]  min-h-[205px] relative  md:text-start'>
              <div className='absolute  left-6 md:left-[50%]  '>
                <img src='/image/Rectangle2.svg' alt='Rectangle2' />
              </div>
              <img
                src='/image/tunnel.svg'
                alt='tunnel'
                className='md:ml-[43%] ml-0'
              />
              <p className='text-xl font-semibold mt-[16px] mb-[16px] md:text-center'>
                Cursus amet
              </p>
              <p className='text-lg not-italic font-normal leading-7 md:text-center'>
                Sit bibendum donec dolor fames neque vulputate non sit aliquam.
                Consequat turpis natoque leo, massa.{' '}
              </p>
            </div>
            <div className='max-w-[373px]  min-h-[205px] relative  md:text-start lg:mt-0 md:mt-5'>
              <div className='absolute  left-6 md:left-[50%]  '>
                <img src='/image/Rectangle34.svg' alt='Rectangle2' />
              </div>
              <img
                src='/image/tv.svg'
                alt='trophy'
                className='md:ml-[43%] ml-0'
              />
              <p className='text-xl font-semibold mt-[16px] mb-[16px] md:text-center'>
                Ipsum fermentum
              </p>
              <p className='text-lg not-italic font-normal leading-7 md:text-center'>
                Sit bibendum donec dolor fames neque vulputate non sit aliquam.
                Consequat turpis natoque leo, massa.{' '}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='min-h-[776px] bg-[#0F172A]  sm:w-full '>
          <div className='sm:px-5 px-20 py-20'>
            <div className='flex justify-between md:flex-col '>
              <div className=''>
                <p className='text-white font-bold text-6xl md:text-3xl md:text-center'>
                  The best of the best
                </p>
              </div>
              <div className='max-w-[233px]  md:h-16 md:w-60 md:mx-auto md:mt-5 border border-white text-center border-2 radius-full flex justify-center items-center rounded-[8px]'>
                <a
                  className='text-white xs:font-bold xs:text-2xl md:font-bold'
                  href='#'
                >
                  Sign up Now
                </a>
              </div>
            </div>
            <div className="mt-[80px] grid grid-cols-3 lg:grid-cols-2 md:flex md:flex-col xl:gap-20  place-items-center  bg-[url('../public/image/Backlights.png')] bg-cover bg-no-repeat bg-center ">
              <div className='max-w-sm '>
                <div className='max-h-[472px]  rounded overflow-hidden  shadow-slate-200 shadow-md bg-[#0F172A]'>
                  <img
                    className='w-full'
                    src='/image/Picture.png'
                    alt='Sunset in the mountains'
                  />
                  <div className='px-6 '>
                    <div className='font-bold text-xl mb-2 text-white mt-8'>
                      Title
                    </div>
                    <p className='text-gray-700 text-base text-white mt-4'>
                      Egestas elit dui scelerisque ut eu purus aliquam vitae
                      habitasse.
                    </p>
                  </div>
                  <div className='max-w-[330px] sm:mx-5 h-14 mx-auto  mt-8 mb-6 border border-white text-center border-2 radius-full flex justify-center items-center rounded-[8px]'>
                    <a className='text-white' href='#'>
                      Sign up Now
                    </a>
                  </div>
                </div>
              </div>

              <div className='max-w-sm '>
                <div className='max-h-[472px]  rounded overflow-hidden shadow-slate-200 shadow-md  bg-[#0F172A]'>
                  <img
                    className='w-full'
                    src='/image/Picture1.png'
                    alt='Sunset in the mountains'
                  />
                  <div className='px-6 '>
                    <div className='font-bold text-xl mb-2 text-white mt-8'>
                      Title
                    </div>
                    <p className='text-gray-700 text-base text-white mt-4'>
                      Egestas elit dui scelerisque ut eu purus aliquam vitae
                      habitasse.
                    </p>
                  </div>
                  <div className=' h-14 max-w-[330px] mx-auto sm:mx-5 mt-8 mb-6 border border-white text-center border-2 radius-full flex justify-center items-center rounded-[8px]'>
                    <a className='text-white' href='#'>
                      Sign up Now
                    </a>
                  </div>
                </div>
              </div>

              <div className='max-w-sm '>
                <div className='max-h-[472px]  rounded overflow-hidden shadow-slate-200 shadow-md  bg-[#0F172A]'>
                  <img
                    className='w-full'
                    src='/image/Picture2.png'
                    alt='Sunset in the mountains'
                  />
                  <div className='px-6 '>
                    <div className='font-bold text-xl mb-2 text-white mt-8'>
                      Title
                    </div>
                    <p className='text-gray-700 text-base text-white mt-4'>
                      Egestas elit dui scelerisque ut eu purus aliquam vitae
                      habitasse.
                    </p>
                  </div>
                  <div className='h-14 max-w-[330px] mx-auto sm:mx-5 mt-8 mb-6 border border-white text-center border-2 radius-full flex justify-center items-center rounded-[8px]'>
                    <a className='text-white' href='#'>
                      Sign up Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='min-h-[816px] bg-[#FFFCF3] px-[80px] py-[160px] lg:py-10 lg:px-5'>
          <div className=' min-h-[496px] bg-whiterounded-[30px]  md:min-h-[350px]  shadow-black-200  shadow-lg relative flex justify-between lg:flex-col'>
            <div className=' min-h-[496px]  md:min-h-[350px]  w-[35vw] md:w-full lg:w-full flex flex-col items-center justify-center'>
              <div>
                <p className='text-black font-bold text-6xl md:text-4xl sm:text-center md:text-center'>
                  Why join us
                </p>
                <div className='py-[24px] sm:mx-3'>
                  <div className='flex'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                    >
                      <path
                        d='M10.486 16.7299C10.3547 16.7302 10.2247 16.7045 10.1034 16.6544C9.98204 16.6043 9.87181 16.5307 9.77899 16.4379L5.53699 12.1949C5.44141 12.1027 5.36516 11.9924 5.31266 11.8705C5.26017 11.7485 5.23249 11.6173 5.23125 11.4845C5.23 11.3517 5.25521 11.22 5.3054 11.0971C5.3556 10.9742 5.42977 10.8625 5.52359 10.7685C5.61742 10.6746 5.72902 10.6002 5.85188 10.5499C5.97474 10.4995 6.1064 10.4741 6.23918 10.4752C6.37196 10.4762 6.50319 10.5037 6.62523 10.556C6.74727 10.6083 6.85767 10.6845 6.94999 10.7799L10.485 14.3149L16.85 7.95189C17.0375 7.76425 17.2919 7.65879 17.5571 7.65869C17.8224 7.6586 18.0768 7.76389 18.2645 7.95139C18.4521 8.1389 18.5576 8.39327 18.5577 8.65854C18.5578 8.92381 18.4525 9.17825 18.265 9.36589L11.193 16.4379C11.1002 16.5307 10.9899 16.6043 10.8686 16.6544C10.7473 16.7045 10.6173 16.7302 10.486 16.7299Z'
                        fill='#15803D'
                      />
                    </svg>
                    <p className='ml-2'>
                      Est et in pharetra magna adipiscing ornare aliquam.
                    </p>
                  </div>
                  <div className='flex'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                    >
                      <path
                        d='M10.486 16.7299C10.3547 16.7302 10.2247 16.7045 10.1034 16.6544C9.98204 16.6043 9.87181 16.5307 9.77899 16.4379L5.53699 12.1949C5.44141 12.1027 5.36516 11.9924 5.31266 11.8705C5.26017 11.7485 5.23249 11.6173 5.23125 11.4845C5.23 11.3517 5.25521 11.22 5.3054 11.0971C5.3556 10.9742 5.42977 10.8625 5.52359 10.7685C5.61742 10.6746 5.72902 10.6002 5.85188 10.5499C5.97474 10.4995 6.1064 10.4741 6.23918 10.4752C6.37196 10.4762 6.50319 10.5037 6.62523 10.556C6.74727 10.6083 6.85767 10.6845 6.94999 10.7799L10.485 14.3149L16.85 7.95189C17.0375 7.76425 17.2919 7.65879 17.5571 7.65869C17.8224 7.6586 18.0768 7.76389 18.2645 7.95139C18.4521 8.1389 18.5576 8.39327 18.5577 8.65854C18.5578 8.92381 18.4525 9.17825 18.265 9.36589L11.193 16.4379C11.1002 16.5307 10.9899 16.6043 10.8686 16.6544C10.7473 16.7045 10.6173 16.7302 10.486 16.7299Z'
                        fill='#15803D'
                      />
                    </svg>
                    <p className='ml-2'>
                      Tellus arcu sed consequat ac velit ut eu blandit.
                    </p>
                  </div>
                  <div className='flex'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                    >
                      <path
                        d='M10.486 16.7299C10.3547 16.7302 10.2247 16.7045 10.1034 16.6544C9.98204 16.6043 9.87181 16.5307 9.77899 16.4379L5.53699 12.1949C5.44141 12.1027 5.36516 11.9924 5.31266 11.8705C5.26017 11.7485 5.23249 11.6173 5.23125 11.4845C5.23 11.3517 5.25521 11.22 5.3054 11.0971C5.3556 10.9742 5.42977 10.8625 5.52359 10.7685C5.61742 10.6746 5.72902 10.6002 5.85188 10.5499C5.97474 10.4995 6.1064 10.4741 6.23918 10.4752C6.37196 10.4762 6.50319 10.5037 6.62523 10.556C6.74727 10.6083 6.85767 10.6845 6.94999 10.7799L10.485 14.3149L16.85 7.95189C17.0375 7.76425 17.2919 7.65879 17.5571 7.65869C17.8224 7.6586 18.0768 7.76389 18.2645 7.95139C18.4521 8.1389 18.5576 8.39327 18.5577 8.65854C18.5578 8.92381 18.4525 9.17825 18.265 9.36589L11.193 16.4379C11.1002 16.5307 10.9899 16.6043 10.8686 16.6544C10.7473 16.7045 10.6173 16.7302 10.486 16.7299Z'
                        fill='#15803D'
                      />
                    </svg>
                    <p className='ml-2'>
                      Ullamcorper ornare in et egestas dolor orci.
                    </p>
                  </div>
                </div>
                <div className='w-[149px] border border-[#78350F] text-center border-2 radius-full py-2 rounded-[8px] md:mx-auto '>
                  <a className='text-xl text-[#78350F] font-bold' href='#'>
                    Sign up Now
                  </a>
                </div>
              </div>
            </div>
            <div className='w-[35vw]  '>
              <img
                src='/image/Deco-video.png'
                alt=''
                className='absolute z-[10] lg:w-[600px] md:w-80 lg:left-[10%] left-[44rem] sm:left-[5%] xs:!left-[0%] sm:!top-[290px]  '
              />
              <div className='absolute z-10 right-8 top-24 lg:top-[36rem] overflow-hidden sm:!top-[22rem] sm:right-[-5px] md:!top-[27rem]'>
                <img src='/image/Desktop.png' alt='' className='' />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class='min-h-[732px] bg-[#FFFDF6] px-[80px] py-[160px] md:!px-0 md:py-5 sm:!px-0  lg:px-[60px] xs:min-h-[0px] '>
          <div class='flex justify-between px-10 md:px-0 md:mt-32 lg:px-5 xs:!mt-0 xs:!px-0'>
            <div class='text-black font-bold text-6xl md:text-4xl sm:text-3xl lg:mx-auto lg:mt-24 xs:!mt-0'>
              Because they love us
            </div>
            <div class='flex lg:hidden'>
              <img src='./image/ButtonLeft.svg' alt='' />
              <img src='./image/ButtonRight.svg' alt='' class='ml-6' />
            </div>
          </div>
          <div class='h-[421px] sm:h-[280px] bg-[#FDE68A] mt-10  relative '></div>
        </div>
        <div className=' w-full flex  overflow-x-auto items-center lg:!overflow-auto absolute top-[183rem] lg:top-[238rem] md:!top-[293rem] xs:mt-[-350px]  justify-center'>
          <div className='flex gap-20'>
            <div className='w-[300px] h-[430px] sm:!h-[300px] bg-white rounded-3xl shadow-2xl shadow-[#585858]'>
              <div className=' mx-2 my-2 sm:mx-3 sm:my-5'>
                <img src='./image/Logo-grey.svg' alt='' class='py-6' />
                <p class='text-2xl font-normal py-8 sm:py-1 sm:!text-base'>
                  Non risus viverra enim, quis. Eget vitae arcu vivamus sit
                  tellus, viverra turpis lorem. Varius a turpis urna id
                  porttitor.
                </p>
                <div class='flex py-6'>
                  <img src='/image/UserThumb.png' alt='' />
                  <div class='ml-4'>
                    <p>Hallen Jummy</p>
                    <p>Team Lead</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-[300px] h-[430px] sm:!h-[300px] bg-white rounded-3xl shadow-2xl shadow-[#585858]'>
              <div className=' mx-2 my-2 sm:mx-3 sm:my-5'>
                <img src='./image/Logo-grey.svg' alt='' class='py-6' />
                <p class='text-2xl font-normal py-8 sm:py-1 sm:!text-base'>
                  Non risus viverra enim, quis. Eget vitae arcu vivamus sit
                  tellus, viverra turpis lorem. Varius a turpis urna id
                  porttitor.
                </p>
                <div class='flex py-6'>
                  <img src='/image/UserThumb.png' alt='' />
                  <div class='ml-4'>
                    <p>Hallen Jummy</p>
                    <p>Team Lead</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-[300px] h-[430px] sm:!h-[300px] bg-white rounded-3xl shadow-2xl shadow-[#585858]'>
              <div className=' mx-2 my-2 sm:mx-3 sm:my-5'>
                <img src='image/logoGrey2.svg' alt='' class='py-6' />
                <p class='text-2xl font-normal py-8 sm:py-1 sm:!text-base'>
                  Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis
                  amet enim. Sit purus venenatis velit semper lectus sed ornare
                  quam nulla.
                </p>
                <div class='flex py-6'>
                  <img src='image/user2.png' alt='' />
                  <div class='ml-4'>
                    <p>Hellena John</p>
                    <p>Co-founder</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='w-[300px] h-[430px] sm:!h-[300px] bg-white rounded-3xl shadow-2xl shadow-[#585858]'>
              <div className=' mx-2 my-2 sm:mx-3 sm:my-5'>
                <img src='image/logoGrey4.svg' alt='' class='py-6' />
                <p class='text-2xl font-normal py-8 sm:py-1 sm:!text-base'>
                  A eget sed posuere dui risus habitasse mauris. Venenatis
                  aliquet id ultrices a lacus. Pretium vehicula pretium posuere
                  justo sed.
                </p>
                <div class='flex py-6'>
                  <img src='/image/user3.png' alt='' />
                  <div class='ml-4'>
                    <p>David Oshodi</p>
                    <p>Manager</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-[300px] h-[430px] sm:!h-[300px] bg-white rounded-3xl shadow-2xl shadow-[#585858]'>
              <div className=' mx-2 my-2 sm:mx-3 sm:my-5'>
                <img src='image/logoGrey4.svg' alt='' class='py-6' />
                <p class='text-2xl font-normal py-8 sm:py-1 sm:!text-base'>
                  A eget sed posuere dui risus habitasse mauris. Venenatis
                  aliquet id ultrices a lacus. Pretium vehicula pretium posuere
                  justo sed.
                </p>
                <div class='flex py-6'>
                  <img src='/image/user4.png' alt='' />
                  <div class='ml-4'>
                    <p>Charolette Hanlin</p>
                    <p>CEO</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className=''>
          <div
            className='min-h-[996px] bg-[#FFFEFA] px-[80px] py-[80px] md:px-0 bg-cover   '
            style={{
              backgroundImage: 'url("/image/Waves.png")',
            }}
          >
            <div className='text-black font-bold text-6xl sm:px-5'>
              Grow your collection
            </div>
            <p className='text-lg mt-8  font-normal sm:px-6'>
              Enim neque massa porta adipiscing elit. Sem libero id faucibus
              nibh amet dictum pellentesque sed. Eu non turpis risus odio
              sapien, fames sit rhoncus. Nec magna sed interdum sit purus
              tellus. Et volutpat proin neque placerat at bibendum quam tellus.
            </p>

            <div className='mt-[80px] flex lg:flex-col '>
              <div className='w-[15%] xl:w-[25%] lg:flex lg:!w-full  lg:overflow-x-auto lg:items-center lg:pb-2 sm:overflow-auto'>
                <div className='max-w-[256px]  min-h-[56px] lg:h-10 px-4 py-4  bg-white rounded-xl shadow-lg shadow-[#4a4a4a] sm:ml-4'>
                  <div className='flex justify-around lg:justify-normal '>
                    <img src='/image/search.svg' alt='' />
                    <p className='font-bold lg:w-40 lg:ml-0'>Bidendum tellus</p>
                    <img
                      src='/image/arrow-right.svg'
                      alt=''
                      className='lg:hidden'
                    />
                  </div>
                </div>
                <div className='max-w-[256px]  min-h-[56px] lg:h-10 px-4 py-4    '>
                  <div className='flex lg:justify-normal '>
                    <svg
                      className='ml-2 mr-2'
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                    >
                      <path
                        d='M6 6.386V10C6.00014 11.2854 6.27502 12.556 6.80622 13.7265C7.33741 14.897 8.11266 15.9405 9.08 16.787L12 19.342L14.92 16.787C15.8874 15.9405 16.6627 14.8971 17.1939 13.7265C17.7251 12.556 17.9999 11.2854 18 10V6.386L12 4.136L6 6.386ZM4.649 4.756L12 2L19.351 4.757C19.5416 4.82844 19.7058 4.95632 19.8218 5.12357C19.9377 5.29082 19.9999 5.48948 20 5.693V10C20 13.177 18.628 16.2 16.237 18.293L12 22L7.763 18.293C6.58096 17.2587 5.63369 15.9837 4.98469 14.5534C4.33569 13.1231 3.99996 11.5706 4 10V5.693C4.00008 5.48948 4.06225 5.29082 4.17822 5.12357C4.29419 4.95632 4.45843 4.82844 4.649 4.757V4.756ZM10.939 12.268L14.475 8.732C14.6636 8.54984 14.9162 8.44905 15.1784 8.45133C15.4406 8.4536 15.6914 8.55877 15.8768 8.74418C16.0622 8.92959 16.1674 9.1804 16.1697 9.4426C16.172 9.7048 16.0712 9.9574 15.889 10.146L11.646 14.39C11.4585 14.5775 11.2042 14.6828 10.939 14.6828C10.6738 14.6828 10.4195 14.5775 10.232 14.39L8.111 12.269C7.92884 12.0804 7.82805 11.8278 7.83033 11.5656C7.8326 11.3034 7.93777 11.0526 8.12318 10.8672C8.30859 10.6818 8.5594 10.5766 8.8216 10.5743C9.0838 10.572 9.3364 10.6728 9.525 10.855L10.939 12.269V12.268Z'
                        fill='#0F172A'
                      />
                    </svg>
                    <p className='font-bold lg:w-40 lg:ml-0 ml-3'>Cras eget</p>
                  </div>
                </div>
                <div className='max-w-[256px]  min-h-[56px] lg:h-10 px-4 py-4    '>
                  <div className='flex lg:justify-normal '>
                    <svg
                      className='ml-2 mr-2'
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                    >
                      <path
                        d='M12.308 15.471L12.384 14.407L13.311 13.878C14.2011 13.3622 15.0188 12.7307 15.743 12C18.383 9.35898 19.189 6.25398 18.218 5.28198C17.246 4.31198 14.141 5.11598 11.5 7.75698C10.74 8.51698 10.103 9.34698 9.62199 10.189L9.09199 11.116L8.02899 11.192C7.15665 11.2532 6.32886 11.6004 5.67399 12.18C6.92394 12.73 8.06037 13.5083 9.02499 14.475C10.005 15.455 10.777 16.592 11.32 17.826C11.8995 17.1711 12.2468 16.3433 12.308 15.471ZM9.33499 18.3C9.13388 18.5734 8.91224 18.8312 8.67199 19.071C7.49999 20.243 5.73199 20.596 3.36799 20.131C2.90399 17.768 3.25799 16 4.42799 14.828C4.67599 14.582 4.93399 14.36 5.19999 14.165C4.3802 13.7645 3.50413 13.4914 2.60199 13.355C2.89243 12.4433 3.3976 11.6147 4.07499 10.939C5.09339 9.91804 6.44655 9.2997 7.88499 9.19798C8.48877 8.15316 9.22857 7.19311 10.085 6.34298C13.405 3.02298 17.679 1.91598 19.632 3.86798C21.584 5.82098 20.476 10.095 17.157 13.414C16.3069 14.2704 15.3468 15.0102 14.302 15.614C14.2003 17.0524 13.5819 18.4056 12.561 19.424C11.8858 20.1023 11.0571 20.6079 10.145 20.898C10.0086 19.9958 9.73547 19.1198 9.33499 18.3ZM7.60999 15.89C7.44896 15.7286 7.26741 15.589 7.06999 15.475C6.63799 15.625 6.12999 15.955 5.66499 16.419C5.44599 16.639 5.17799 17.378 5.17499 18.324C6.12099 18.321 6.86299 18.05 7.07999 17.834C7.54499 17.368 7.87499 16.861 8.02399 16.429C7.91024 16.2316 7.77105 16.0501 7.60999 15.889V15.89ZM15.388 8.10998C15.2903 8.01825 15.2121 7.90783 15.1579 7.78527C15.1037 7.66271 15.0747 7.53052 15.0727 7.39654C15.0706 7.26256 15.0954 7.12953 15.1458 7.00535C15.1961 6.88117 15.2709 6.76837 15.3657 6.67365C15.4605 6.57894 15.5733 6.50424 15.6975 6.45399C15.8217 6.40374 15.9548 6.37897 16.0888 6.38114C16.2228 6.38332 16.3549 6.4124 16.4774 6.46665C16.6 6.52091 16.7103 6.59923 16.802 6.69698C16.9744 6.88714 17.0671 7.13633 17.0609 7.39295C17.0547 7.64957 16.95 7.89397 16.7685 8.07555C16.5871 8.25712 16.3428 8.36197 16.0861 8.36838C15.8295 8.37479 15.5803 8.28227 15.39 8.10998H15.388Z'
                        fill='#0F172A'
                      />
                    </svg>
                    <p className='font-bold lg:w-40 lg:ml-0 ml-3'>
                      Dolor pharetra
                    </p>
                  </div>
                </div>
                <div className='max-w-[256px]  min-h-[56px] lg:h-10 px-4 py-4    '>
                  <div className='flex lg:justify-normal '>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='ml-2 mr-2'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                    >
                      <path
                        d='M5 5C4.73478 5 4.48043 5.10536 4.29289 5.29289C4.10536 5.48043 4 5.73478 4 6V15C4 15.2652 4.10536 15.5196 4.29289 15.7071C4.48043 15.8946 4.73478 16 5 16H19C19.2652 16 19.5196 15.8946 19.7071 15.7071C19.8946 15.5196 20 15.2652 20 15V6C20 5.73478 19.8946 5.48043 19.7071 5.29289C19.5196 5.10536 19.2652 5 19 5H5ZM5 3H19C19.7956 3 20.5587 3.31607 21.1213 3.87868C21.6839 4.44129 22 5.20435 22 6V15C22 15.7956 21.6839 16.5587 21.1213 17.1213C20.5587 17.6839 19.7956 18 19 18H5C4.20435 18 3.44129 17.6839 2.87868 17.1213C2.31607 16.5587 2 15.7956 2 15V6C2 5.20435 2.31607 4.44129 2.87868 3.87868C3.44129 3.31607 4.20435 3 5 3V3ZM9 19H15C15.2652 19 15.5196 19.1054 15.7071 19.2929C15.8946 19.4804 16 19.7348 16 20C16 20.2652 15.8946 20.5196 15.7071 20.7071C15.5196 20.8946 15.2652 21 15 21H9C8.73478 21 8.48043 20.8946 8.29289 20.7071C8.10536 20.5196 8 20.2652 8 20C8 19.7348 8.10536 19.4804 8.29289 19.2929C8.48043 19.1054 8.73478 19 9 19Z'
                        fill='#0F172A'
                      />
                    </svg>
                    <p className='font-bold lg:w-40 lg:ml-0 ml-3'>
                      Amet, fringilla
                    </p>
                  </div>
                </div>
                <div className='max-w-[256px]  min-h-[56px] lg:h-10 px-4 py-4    '>
                  <div className='flex lg:justify-normal '>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='ml-2 mr-2'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                    >
                      <path
                        d='M10 21.8C5.436 20.873 2 16.838 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 16.838 18.564 20.873 14 21.8V19.748C15.8853 19.2612 17.5284 18.1035 18.6212 16.492C19.714 14.8804 20.1816 12.9256 19.9362 10.994C19.6909 9.06237 18.7495 7.28653 17.2885 5.99936C15.8275 4.71218 13.9471 4.00203 12 4.00203C10.0529 4.00203 8.17255 4.71218 6.71153 5.99936C5.25052 7.28653 4.30911 9.06237 4.06376 10.994C3.81841 12.9256 4.28597 14.8804 5.3788 16.492C6.47162 18.1035 8.11468 19.2612 10 19.748V21.8ZM10 17.659C8.66557 17.1872 7.54089 16.2589 6.82474 15.038C6.10858 13.8172 5.84707 12.3825 6.08641 10.9875C6.32575 9.59254 7.05054 8.32707 8.13268 7.41479C9.21482 6.50251 10.5846 6.00215 12 6.00215C13.4154 6.00215 14.7852 6.50251 15.8673 7.41479C16.9495 8.32707 17.6742 9.59254 17.9136 10.9875C18.1529 12.3825 17.8914 13.8172 17.1753 15.038C16.4591 16.2589 15.3344 17.1872 14 17.659V15.465C14.7626 15.0247 15.3586 14.3451 15.6955 13.5316C16.0325 12.7181 16.0916 11.8162 15.8637 10.9656C15.6358 10.1151 15.1336 9.36352 14.435 8.82749C13.7365 8.29145 12.8805 8.0009 12 8.0009C11.1195 8.0009 10.2635 8.29145 9.56495 8.82749C8.86638 9.36352 8.3642 10.1151 8.1363 10.9656C7.9084 11.8162 7.96751 12.7181 8.30448 13.5316C8.64145 14.3451 9.23743 15.0247 10 15.465V17.659ZM13 13.732V22H11V13.732C10.6187 13.5119 10.3207 13.1721 10.1522 12.7653C9.98376 12.3586 9.9542 11.9076 10.0681 11.4823C10.1821 11.057 10.4332 10.6813 10.7825 10.4132C11.1318 10.1452 11.5597 9.99995 12 9.99995C12.4403 9.99995 12.8682 10.1452 13.2175 10.4132C13.5668 10.6813 13.8179 11.057 13.9319 11.4823C14.0458 11.9076 14.0162 12.3586 13.8478 12.7653C13.6793 13.1721 13.3813 13.5119 13 13.732Z'
                        fill='#0F172A'
                      />
                    </svg>
                    <p className='font-bold lg:w-40 lg:ml-0 ml-3'>Amet, nibb</p>
                  </div>
                </div>
                <div className='max-w-[256px]  min-h-[56px] lg:h-10 px-4 py-4    '>
                  <div className='flex  lg:justify-normal '>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='ml-2 mr-2'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                    >
                      <path
                        d='M11 16V5C11 4.73478 11.1054 4.48043 11.2929 4.29289C11.4804 4.10536 11.7348 4 12 4C12.2652 4 12.5196 4.10536 12.7071 4.29289C12.8946 4.48043 13 4.73478 13 5V16H14C14.2652 16 14.5196 16.1054 14.7071 16.2929C14.8946 16.4804 15 16.7348 15 17C15 17.2652 14.8946 17.5196 14.7071 17.7071C14.5196 17.8946 14.2652 18 14 18H13V19C13 19.2652 12.8946 19.5196 12.7071 19.7071C12.5196 19.8946 12.2652 20 12 20C11.7348 20 11.4804 19.8946 11.2929 19.7071C11.1054 19.5196 11 19.2652 11 19V18H10C9.73478 18 9.48043 17.8946 9.29289 17.7071C9.10536 17.5196 9 17.2652 9 17C9 16.7348 9.10536 16.4804 9.29289 16.2929C9.48043 16.1054 9.73478 16 10 16H11ZM18 6V5C18 4.73478 18.1054 4.48043 18.2929 4.29289C18.4804 4.10536 18.7348 4 19 4C19.2652 4 19.5196 4.10536 19.7071 4.29289C19.8946 4.48043 20 4.73478 20 5V6H21C21.2652 6 21.5196 6.10536 21.7071 6.29289C21.8946 6.48043 22 6.73478 22 7C22 7.26522 21.8946 7.51957 21.7071 7.70711C21.5196 7.89464 21.2652 8 21 8H20V19C20 19.2652 19.8946 19.5196 19.7071 19.7071C19.5196 19.8946 19.2652 20 19 20C18.7348 20 18.4804 19.8946 18.2929 19.7071C18.1054 19.5196 18 19.2652 18 19V8H17C16.7348 8 16.4804 7.89464 16.2929 7.70711C16.1054 7.51957 16 7.26522 16 7C16 6.73478 16.1054 6.48043 16.2929 6.29289C16.4804 6.10536 16.7348 6 17 6H18ZM6 9H7C7.26522 9 7.51957 9.10536 7.70711 9.29289C7.89464 9.48043 8 9.73478 8 10C8 10.2652 7.89464 10.5196 7.70711 10.7071C7.51957 10.8946 7.26522 11 7 11H6V19C6 19.2652 5.89464 19.5196 5.70711 19.7071C5.51957 19.8946 5.26522 20 5 20C4.73478 20 4.48043 19.8946 4.29289 19.7071C4.10536 19.5196 4 19.2652 4 19V11H3C2.73478 11 2.48043 10.8946 2.29289 10.7071C2.10536 10.5196 2 10.2652 2 10C2 9.73478 2.10536 9.48043 2.29289 9.29289C2.48043 9.10536 2.73478 9 3 9H4V5C4 4.73478 4.10536 4.48043 4.29289 4.29289C4.48043 4.10536 4.73478 4 5 4C5.26522 4 5.51957 4.10536 5.70711 4.29289C5.89464 4.48043 6 4.73478 6 5V9Z'
                        fill='#0F172A'
                      />
                    </svg>
                    <p className='font-bold lg:w-40 lg:ml-0 ml-3'>Sed velit</p>
                  </div>
                </div>
              </div>
              <div className=' flex justify-end w-[85%] xl:w-[70%] lg:mx-auto sm:!w-full sm:mt-5 md:!w-full lg:!w-full'>
                <img
                  src='/image/Col2.png'
                  alt=''
                  className='z-[10] xl:w-[80%] sm:!w-full md:!w-full lg:!w-full'
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='  bg-[#78350F]'>
          <div
            className='min-h-[635px]  max-w-[1049px] bg-[#78350F] mx-auto  flex flex-col justify-center '
            style={{ backgroundImage: 'url("/image/newChart2.png")' }}
          >
            <div className=' text-center ml-8 lg:mt-10 sm:ml-0 sm:mx-1'>
              <p className='font-extrabold  text-8xl text-white sm:text-5xl xs:text-4xl'>
                11,658,467
              </p>
              <p className='font-extrabold text-[56px] text-white text-center sm:text-3xl xs:text-3xl'>
                Shoes Collected
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className='bg-[#0F172A] text-center text-neutral-600  lg:text-left'>
        <div className='mx-6 py-10 text-center md:text-left px-[80px]' />
        <div className='grid-1 grid gap-8  grid-cols-4 lg:grid-cols-2 md:flex md:flex-col'>
          <div className=''>
            <h6 className='mb-4 flex justify-center font-semibold uppercase  text-white'>
              Products
            </h6>
            <p className='mb-4'>
              <a
                href='#!'
                className='text-neutral-600 dark:text-neutral-200 lg:flex lg:justify-center'
              >
                Pricing
              </a>
            </p>
            <p className='mb-4'>
              <a
                href='#!'
                className='text-neutral-600 dark:text-neutral-200 lg:flex lg:justify-center'
              >
                Overview
              </a>
            </p>
            <p className='mb-4'>
              <a
                href='#!'
                className='text-neutral-600 dark:text-neutral-200 lg:flex lg:justify-center'
              >
                Browse
              </a>
            </p>
            <p className='mb-4'>
              <a
                href='#!'
                className='text-neutral-600 dark:text-neutral-200 lg:flex lg:justify-center'
              >
                Accessibility
              </a>
            </p>
            <p>
              <a
                href='#!'
                className='text-neutral-600 dark:text-neutral-200 lg:flex lg:justify-center'
              >
                Five
              </a>
            </p>
          </div>
          <div className=''>
            <h6 className='mb-4 flex justify-center font-semibold uppercase  text-white'>
              Solutions
            </h6>
            <p className='mb-4'>
              <a
                href='#!'
                className='text-neutral-600 dark:text-neutral-200 lg:flex lg:justify-center'
              >
                Brainstorming
              </a>
            </p>
            <p className='mb-4'>
              <a
                href='#!'
                className='text-neutral-600 dark:text-neutral-200 lg:flex lg:justify-center'
              >
                Ideation
              </a>
            </p>
            <p className='mb-4'>
              <a
                href='#!'
                className='text-neutral-600 dark:text-neutral-200 lg:flex lg:justify-center'
              >
                Wireframing
              </a>
            </p>
            <p className='mb-4'>
              <a
                href='#!'
                className='text-neutral-600 dark:text-neutral-200 lg:flex lg:justify-center'
              >
                Research
              </a>
            </p>
            <p>
              <a
                href='#!'
                className='text-neutral-600 dark:text-neutral-200 lg:flex lg:justify-center'
              >
                Design
              </a>
            </p>
          </div>
          <div className=''>
            <h6 className='mb-4 flex justify-center font-semibold uppercase  text-white'>
              Support
            </h6>
            <p className='mb-4'>
              <a
                href='#!'
                className='text-neutral-600 dark:text-neutral-200 lg:flex lg:justify-center '
              >
                Contact Us
              </a>
            </p>
            <p className='mb-4'>
              <a
                href='#!'
                className='text-neutral-600 dark:text-neutral-200 lg:flex lg:justify-center'
              >
                Developers
              </a>
            </p>
            <p className='mb-4'>
              <a
                href='#!'
                className='text-neutral-600 dark:text-neutral-200 lg:flex lg:justify-center'
              >
                Documentation
              </a>
            </p>
            <p className='mb-4'>
              <a
                href='#!'
                className='text-neutral-600 dark:text-neutral-200 lg:flex lg:justify-center'
              >
                Integrations
              </a>
            </p>
            <p className='mb-4'>
              <a
                href='#!'
                className='text-neutral-600 dark:text-neutral-200 lg:flex lg:justify-center'
              >
                Reports
              </a>
            </p>
          </div>
          <div>
            <h6 className='mb-4 font-semibold uppercase text-start text-white lg:flex lg:justify-center'>
              Get the App
            </h6>
            <img src='/image/AppStore.svg' alt='' className='lg:mx-auto' />
            <img
              src='/image/GooglePlay.svg'
              alt=''
              className='mt-3 lg:mx-auto '
            />
            <h6 className='mb-4 mt-20 lg:mt-10  font-semibold uppercase text-start  lg:flex lg:justify-center text-white'>
              Follow Us
            </h6>
            <div className='flex lg:justify-center lg:mb-5'>
              <svg
                className='mr-4'
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
              >
                <path
                  d='M17.812 5.01699H6.145C3.855 5.01699 2 6.85199 2 9.11599V14.884C2 17.148 3.856 18.984 6.145 18.984H17.812C20.102 18.984 21.957 17.148 21.957 14.884V9.11599C21.957 6.85199 20.101 5.01599 17.812 5.01599V5.01699ZM15.009 12.28L9.552 14.855C9.51872 14.871 9.48192 14.8784 9.44503 14.8763C9.40815 14.8743 9.37237 14.863 9.34103 14.8434C9.3097 14.8239 9.28382 14.7967 9.2658 14.7645C9.24779 14.7322 9.23822 14.6959 9.238 14.659V9.34999C9.23867 9.31286 9.24872 9.27651 9.26722 9.24432C9.28573 9.21212 9.31208 9.18513 9.34382 9.16587C9.37556 9.1466 9.41167 9.13568 9.44877 9.13413C9.48587 9.13258 9.52276 9.14044 9.556 9.15699L15.014 11.892C15.0504 11.9101 15.0809 11.9381 15.102 11.9728C15.1232 12.0075 15.1341 12.0474 15.1336 12.0881C15.1331 12.1287 15.1211 12.1683 15.0991 12.2025C15.077 12.2366 15.0458 12.2638 15.009 12.281V12.28Z'
                  fill='#E2E8F0'
                />
              </svg>
              <svg
                className='mx-4'
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
              >
                <path
                  d='M9.046 5.865V8.613H7.032V11.973H9.046V21.959H13.18V11.974H15.955C15.955 11.974 16.215 10.363 16.341 8.601H13.197V6.303C13.197 5.96 13.647 5.498 14.093 5.498H16.347V2H13.283C8.943 2 9.046 5.363 9.046 5.865Z'
                  fill='#E2E8F0'
                />
              </svg>
              <svg
                className='mx-4'
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
              >
                <path
                  d='M22 5.90701C21.2504 6.23439 20.4565 6.44905 19.644 6.54401C20.4968 6.04324 21.138 5.24912 21.448 4.31001C20.64 4.78034 19.7587 5.11161 18.841 5.29001C18.4545 4.88522 17.9897 4.5634 17.4748 4.34419C16.9598 4.12498 16.4056 4.01298 15.846 4.01501C13.58 4.01501 11.743 5.82501 11.743 8.05501C11.743 8.37101 11.779 8.68001 11.849 8.97501C10.2236 8.89771 8.63212 8.48242 7.17617 7.75565C5.72022 7.02888 4.43176 6.00659 3.393 4.75401C3.02883 5.36841 2.83742 6.06979 2.839 6.78401C2.8397 7.45198 3.00683 8.10924 3.32529 8.6964C3.64375 9.28357 4.1035 9.78212 4.663 10.147C4.01248 10.126 3.37602 9.95234 2.805 9.64001V9.69001C2.805 11.648 4.22 13.281 6.095 13.653C5.74261 13.7465 5.37958 13.7939 5.015 13.794C4.75 13.794 4.493 13.769 4.242 13.719C4.51008 14.5269 5.02311 15.2313 5.70982 15.7344C6.39653 16.2374 7.22284 16.5141 8.074 16.526C6.61407 17.6506 4.82182 18.2581 2.979 18.253C2.647 18.253 2.321 18.233 2 18.197C3.88125 19.3877 6.06259 20.0183 8.289 20.015C15.836 20.015 19.962 13.858 19.962 8.51901L19.948 7.99601C20.7529 7.42968 21.4481 6.72186 22 5.90701Z'
                  fill='#E2E8F0'
                />
              </svg>
              <svg
                className='mx-4'
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
              >
                <path
                  d='M16.017 2H7.947C6.37015 2.00185 4.85844 2.62914 3.74353 3.74424C2.62862 4.85933 2.00159 6.37115 2 7.948L2 16.018C2.00185 17.5948 2.62914 19.1066 3.74424 20.2215C4.85933 21.3364 6.37115 21.9634 7.948 21.965H16.018C17.5948 21.9631 19.1066 21.3359 20.2215 20.2208C21.3364 19.1057 21.9634 17.5938 21.965 16.017V7.947C21.9631 6.37015 21.3359 4.85844 20.2208 3.74353C19.1057 2.62862 17.5938 2.00159 16.017 2V2ZM19.957 16.017C19.957 16.5344 19.8551 17.0468 19.6571 17.5248C19.4591 18.0028 19.1689 18.4371 18.803 18.803C18.4371 19.1689 18.0028 19.4591 17.5248 19.6571C17.0468 19.8551 16.5344 19.957 16.017 19.957H7.947C6.90222 19.9567 5.90032 19.5415 5.16165 18.8026C4.42297 18.0638 4.008 17.0618 4.008 16.017V7.947C4.00827 6.90222 4.42349 5.90032 5.16235 5.16165C5.90122 4.42297 6.90322 4.008 7.948 4.008H16.018C17.0628 4.00827 18.0647 4.42349 18.8034 5.16235C19.542 5.90122 19.957 6.90322 19.957 7.948V16.018V16.017Z'
                  fill='#E2E8F0'
                />
                <path
                  d='M11.982 6.819C10.6134 6.82112 9.30154 7.36579 8.33391 8.33361C7.36627 9.30143 6.82186 10.6134 6.82001 11.982C6.82159 13.3509 7.36603 14.6633 8.33391 15.6314C9.30179 16.5995 10.6141 17.1441 11.983 17.146C13.3521 17.1444 14.6647 16.5998 15.6328 15.6317C16.6008 14.6637 17.1454 13.3511 17.147 11.982C17.1449 10.6131 16.5999 9.30088 15.6317 8.33319C14.6634 7.3655 13.3509 6.82132 11.982 6.82V6.819ZM11.982 15.138C11.1452 15.138 10.3428 14.8056 9.75109 14.2139C9.15941 13.6222 8.82701 12.8198 8.82701 11.983C8.82701 11.1462 9.15941 10.3438 9.75109 9.75208C10.3428 9.1604 11.1452 8.828 11.982 8.828C12.8188 8.828 13.6213 9.1604 14.2129 9.75208C14.8046 10.3438 15.137 11.1462 15.137 11.983C15.137 12.8198 14.8046 13.6222 14.2129 14.2139C13.6213 14.8056 12.8188 15.138 11.982 15.138Z'
                  fill='#E2E8F0'
                />
                <path
                  d='M17.156 8.095C17.8392 8.095 18.393 7.54118 18.393 6.858C18.393 6.17483 17.8392 5.621 17.156 5.621C16.4728 5.621 15.919 6.17483 15.919 6.858C15.919 7.54118 16.4728 8.095 17.156 8.095Z'
                  fill='#E2E8F0'
                />
              </svg>
              <svg
                className='mx-4'
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
              >
                <path
                  d='M21.959 13.719V21.098H17.681V14.213C17.681 12.483 17.062 11.303 15.514 11.303C14.332 11.303 13.628 12.099 13.319 12.868C13.206 13.143 13.177 13.526 13.177 13.911V21.098H8.897C8.897 21.098 8.955 9.438 8.897 8.229H13.177V10.053L13.149 10.095H13.177V10.053C13.745 9.178 14.76 7.927 17.033 7.927C19.848 7.927 21.959 9.767 21.959 13.719ZM4.421 2.026C2.958 2.026 2 2.986 2 4.249C2 5.484 2.93 6.473 4.365 6.473H4.393C5.886 6.473 6.813 5.484 6.813 4.249C6.787 2.986 5.887 2.026 4.422 2.026H4.421ZM2.254 21.098H6.532V8.229H2.254V21.098Z'
                  fill='#E2E8F0'
                />
              </svg>
            </div>
          </div>
        </div>

        <div className=' h-[2px] text-center bg-[#334155] mt-5 lg:mx-5'></div>
        <div className='flex justify-between md:flex-col  mx-32 lg:mx-5 lg:text-center lg:mt-5 pb-5 mt-5'>
          <p className='text-neutral-600 dark:text-neutral-200'>
            Collers @ 2023. All rights reserved.
          </p>
          <div className='flex lg:justify-center lg:mb-5'>
            <p className='text-neutral-600 dark:text-neutral-200 mr-8 lg:mx-2 '>
              Terms
            </p>
            <p className='text-neutral-600 dark:text-neutral-200 mx-8 lg:mx-2'>
              Privacy
            </p>
            <p className='text-neutral-600 dark:text-neutral-200 mx-8 lg:mx-2'>
              Contact
            </p>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
            >
              <path
                d='M4.252 10C4.08416 10.6534 3.99949 11.3254 4 12C4 12.69 4.088 13.36 4.252 14H7.1C6.96518 12.6701 6.96518 11.3299 7.1 10H4.252ZM5.07 8H7.416C7.682 6.783 8.066 5.693 8.537 4.786C7.08518 5.48542 5.87722 6.60523 5.07 8ZM19.748 10H16.9C17.0348 11.3299 17.0348 12.6701 16.9 14H19.748C20.0847 12.6879 20.0847 11.3121 19.748 10ZM18.93 8C18.1228 6.60523 16.9148 5.48542 15.463 4.786C15.935 5.693 16.318 6.783 16.584 8H18.93ZM9.112 10C9.03708 10.664 8.99968 11.3318 9 12C9 12.685 9.038 13.355 9.112 14H14.888C15.0386 12.6709 15.0386 11.3291 14.888 10H9.112ZM9.47 8H14.53C14.348 7.2483 14.0855 6.51841 13.747 5.823C13.119 4.568 12.447 4 12 4C11.552 4 10.881 4.568 10.253 5.823C9.938 6.455 9.673 7.19 9.47 8ZM5.07 16C5.87722 17.3948 7.08518 18.5146 8.537 19.214C8.065 18.307 7.682 17.217 7.416 16H5.07ZM18.93 16H16.584C16.318 17.217 15.934 18.307 15.463 19.214C16.9148 18.5146 18.1228 17.3948 18.93 16ZM9.47 16C9.673 16.81 9.938 17.545 10.253 18.177C10.881 19.432 11.553 20 12 20C12.448 20 13.119 19.432 13.747 18.177C14.062 17.545 14.327 16.81 14.53 16H9.47ZM12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22Z'
                fill='#E2E8F0'
              />
            </svg>
            <p className='text-neutral-600 dark:text-neutral-200 ml-2'>EN</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default App;
