import React from 'react'
import './service.css'
import {BiCheck} from 'react-icons/bi'

const Service = () => {
  return (
    <section id='services'>
      <h5>What Can I Do?</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>Website Development</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className='service_list-icon' />
              <p>Developing Merch Page</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Creating Login page</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Creating E-Commerce Website</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Creating Portfolio Website</p>
            </li>
          </ul>
        </article>
        {/* end of frontdev */}

        <article className="service">
          <div className="service_head">
            <h3>DevOps</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className='service_list-icon' />
              <p>Set up CI/CD Pipeline using GCP services</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Creating IaaC using Terraform</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Running Automated Integration Pipeline using Jenkins</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Deploy App with Kubernetes</p>
            </li>
          </ul>
        </article>
        {/* end of devops */}

        <article className="service">
          <div className="service_head">
            <h3>Writing</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className='service_list-icon' />
              <p>Writing some articles on Medium</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Writing blog articles for affiliate marketing</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Writing articles for sales product</p>
            </li>
          </ul>
        </article>
        {/* end of writing */}
      </div>
    </section>
  )
}

export default Service