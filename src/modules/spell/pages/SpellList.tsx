import { useEffect } from "react";
import { Alert, Button, Container, Spinner, Table } from "react-bootstrap"
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../stores/hooks";
import { SpellInterface } from "../models/SpellInterface";
import { addToFavouriteList, getSpellListAsync, removeFromFavouriteList, SpellState } from "../SpellSlice";
import { FaRegStar, FaStar } from "react-icons/fa";

/**
 * Spelling list page
 */
const SpellList = () => {
    
    const { spells, status, favourites} = useAppSelector(SpellState);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getSpellListAsync());
    }, [dispatch])
    return (
        <Container>
            <h1 className="mt-4 mb-4">Spell List</h1>
            {status === "loading" ?
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
                : status === "failed" ?
                    <Alert key={"danger"} variant={"danger"}>
                        Somthing went wrong please try again
                    </Alert>
                    :
                    <Table striped bordered hover>
                        <thead >
                            <tr>
                                <th className="text-right">Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {spells?.length >= 1 ? spells.map((spell: SpellInterface, index: number) => {
                                
                                const isInFavList = favourites.filter((spl) => spl.index === spell.index).length;
                                return (
                                    <tr key={`table_row_${index}`}>
                                        <td>
                                            <Link to={`/detail/${spell.index}`}>{spell.name}</Link></td>
                                        <td>
                                            {isInFavList?
                                            <Button variant="link" onClick={() => dispatch(removeFromFavouriteList(spell.index))}>
                                                <FaStar />
                                            </Button> :
                                            <Button variant="link" onClick={() => dispatch(addToFavouriteList(spell))}>
                                                <FaRegStar />
                                            </Button> }
                                        </td>
                                    </tr>
                                )
                            }) : <tr>
                                <td colSpan={2}>No Record.</td>
                            </tr>}
                        </tbody>
                    </Table>
            }
        </Container>
    )
}
export default SpellList;