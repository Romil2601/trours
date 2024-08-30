import React from 'react'

export default function Blogs() {
    return (
        <div>

            <div class="banner-blog">
                <h1>Blogs</h1>
                <p>Read Our Best Newsletter</p>
            </div>

            <div className='blogs'>
                <h4 style={{ textAlign: 'center', paddingTop: '50px' }}>"Either write something worth reading or do something worth writing."- Benjamin Franklin</h4>

                <div className='blogs_example'>
                    <div class="blog">
                        <img src="https://images.unsplash.com/photo-1615147342761-9238e15d8b96?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80" class="card__image" alt="brown couch" />
                        <div class="card__content">
                            <time datetime="2021-03-30" class="card__date">3 March 2024</time>
                            <span class="card__title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                        </div>
                    </div>

                    <div class="blog">
                        <img src="https://images.unsplash.com/photo-1615147342761-9238e15d8b96?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80" class="card__image" alt="brown couch" />
                        <div class="card__content">
                            <time datetime="2021-03-30" class="card__date">3 March 2024</time>
                            <span class="card__title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                        </div>
                    </div>

                    <div class="blog">
                        <img src="https://images.unsplash.com/photo-1615147342761-9238e15d8b96?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80" class="card__image" alt="brown couch" />
                        <div class="card__content">
                            <time datetime="2021-03-30" class="card__date">3 March 2024</time>
                            <span class="card__title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                        </div>
                    </div>

                    <div class="blog">
                        <img src="https://images.unsplash.com/photo-1615147342761-9238e15d8b96?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80" class="card__image" alt="brown couch" />
                        <div class="card__content">
                            <time datetime="2021-03-30" class="card__date">3 March 2024</time>
                            <span class="card__title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                        </div>
                    </div>

                    <div class="blog">
                        <img src="https://images.unsplash.com/photo-1615147342761-9238e15d8b96?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80" class="card__image" alt="brown couch" />
                        <div class="card__content">
                            <time datetime="2021-03-30" class="card__date">3 March 2024</time>
                            <span class="card__title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                        </div>
                    </div>
                </div>
            </div>

            <hr></hr>

            <div className='footer'>
                <div class="container py-4">
                    <div class="row gy-4 gx-5">
                        <div class="col-lg-4 col-md-6">
                            <h4>SKYFLY</h4>
                            <p class="small">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                            <p class="small mb-0">&copy; Copyrights. All rights reserved. <a class="text-primary" href="/">SKYFLY.com</a></p>
                        </div>
                        <div class="col-lg-2 col-md-6">
                            <h4>Quick links</h4>
                            <ul class="list-unstyled">
                                <li><a href="/">Home</a></li>
                                <li><a href="/aboutus">About</a></li>
                                <li><a href="/destinations">Destinations</a></li>
                                <li><a href="blogs">Blogs</a></li>
                                <li><a href="/contact">Contact</a></li>
                            </ul>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <h4>Newsletter</h4>
                            <p class="small">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                            <form action="#">
                                <div class="input-group mb-3">
                                    <input class="form-control" type="text" placeholder="Recipient's username" />
                                    <button class="btn btn-primary" type="button">Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
