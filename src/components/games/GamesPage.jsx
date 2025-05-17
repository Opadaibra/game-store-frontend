
import { useState, useEffect, } from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import noimg from '../../assets/noimg.svg';
import { Link } from 'react-router-dom';
import { fetchGames } from '../../services/GameService';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../features/cart/CartSlice';
export function GamesPage() {
    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);

    const handleAddToCart = (game) => {
        dispatch(addToCart(game));
    };
    useEffect(() => {
        const loadGames = async () => {
            try {
                const data = await fetchGames();
                setGames(data);
                setLoading(false);
            } catch (error) {
                console.error('Error in GamesPage:', error);
                setLoading(false);
            }
        };
        loadGames();
    }, []);

    return (
        <div>
            <div class="container mx-auto p-4">

                <h2 class="text-sm md:text-lg xl:text-xl">Featured Games</h2>
                {loading ? (
                    <div className="text-center">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                )
                    : (<div class="grid  sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {games.map((game) => (
                            <div class="bg-white rounded-lg shadow p-6">
                                <img src={game.main_image_url ?? noimg} class="w-full h-auto max-w-full" alt="" />

                                <h3 class="text-xl font-bold mb-2">{game.name}</h3>
                                <p>   ${game.price}<br />
                                    {game.company.name}</p>
                                <Button variant="success"
                                    className='me-3'
                                    onClick={() => handleAddToCart(game)}>
                                    Cart
                                </Button>
                                <Button variant="primary">
                                    <Link to={`/games/${game.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                        View Details
                                    </Link>
                                </Button>
                            </div>

                        ))}
                    </div>)}
            </div>
            {/* <div className={styles.cart_item}>
                <Cart />

            </div> */}

        </div>
    );
}

