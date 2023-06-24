import ProfileImage from '../assets/images/image-victor.jpg'

export function Lobby(){
    return(
        <main>
            <div className='top-container'>
                <div className='profile-image-container'>
                    <img src={ProfileImage} alt='Victor' />
                </div>
            </div>
            <div className='profile-info-container'>
                <p className='user-name'>Victor Crest <span>26</span></p>
                <p className='place'>London</p>
            </div>
            <hr />
            <div className='columns-data-container'>
                <div className='data'>
                    <p className='number'>
                        80K
                    </p>
                    <p className='text'>
                        Followers
                    </p>
                </div>
                <div className='data'>
                    <p className='number'>
                        803K
                    </p>
                    <p className='text'>
                        Likes
                    </p>
                </div>
                <div className='data'>
                    <p className='number'>
                        1.4k
                    </p>
                    <p className='text'>
                        Photos
                    </p>
                </div>
            </div>
            <footer class='footer-page'>
                <p>Created by <a href="https://github.com/Farith-Palestina">Farith Palestina</a>.</p>
            </footer>
        </main>
    )
}