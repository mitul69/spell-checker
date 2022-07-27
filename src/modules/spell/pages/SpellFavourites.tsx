import { Button, Container, Table } from "react-bootstrap"
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../stores/hooks";
import { SpellInterface } from "../models/SpellInterface";
import { removeFromFavouriteList, SpellState } from "../SpellSlice";
import { FaStar } from "react-icons/fa";
/**
 * Spelling Favourites list page
 */
const SpellFavourites = () => {
    const { favourites } = useAppSelector(SpellState);
    const dispatch = useAppDispatch();

    return (
        <Container>
            <h1 className="mt-4 mb-4">Spell in your favourites</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th className="text-right">Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {favourites?.length >= 1 ? favourites.map((spell: SpellInterface, index: number) => {
                        return (
                            <tr>
                                <td>
                                    <Link to={`/detail/${spell.index}`}>{spell.name}</Link></td>
                                <td>
                                    <Button variant="link" onClick={() => dispatch(removeFromFavouriteList(spell.index))}>
                                        <FaStar />
                                    </Button>

                                </td>
                            </tr>
                        )
                    }) : <tr>
                        <td colSpan={2}>No Record.</td>
                    </tr>}
                </tbody>
            </Table>
        </Container>
    )
}
export default SpellFavourites;