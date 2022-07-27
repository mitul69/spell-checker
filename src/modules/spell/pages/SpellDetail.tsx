import { useEffect } from "react";
import { Alert, Badge, Button, Card, Container, Spinner } from "react-bootstrap"
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../stores/hooks";
import { SpellInterface } from "../models/SpellInterface";
import { addToFavouriteList, getSpellDetailAsync, removeFromFavouriteList, SpellState } from "../SpellSlice";
import { FaRegStar, FaStar } from "react-icons/fa";

/**
 * Spelling Detail list page
 */
const SpellDetail = () => {
    const { detail, status, favourites } = useAppSelector(SpellState);
    const params = useParams();
    const dispatch = useAppDispatch();
    const navigator = useNavigate()
    useEffect(() => {
        if (params.index) {
            dispatch(getSpellDetailAsync(params.index));
        } else {
            navigator("/")
        }
    }, [params, navigator, dispatch])
    const isInFavList = favourites.filter(spell => spell.index === detail.index).length >= 1;

    return (
        <Container>

            {status === "loading" ?
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
                : status === "failed" ?
                    <Alert key={"danger"} variant={"danger"}>
                        Somthing went wrong please try again
                    </Alert>
                    :
                    <>
                        <h1 className="mt-4 mb-4">
                            {isInFavList ?
                                <Button variant="link" onClick={() => dispatch(removeFromFavouriteList(detail.index))}>
                                    <FaStar />
                                </Button> :
                                <Button variant="link" onClick={() => dispatch(addToFavouriteList(detail))}>
                                    <FaRegStar />
                                </Button>}
                            {detail.name}</h1>
                        <Card className="mb-2">
                            <Card.Header>Description</Card.Header>
                            {detail.desc?.map((desc: string, index: number) => {
                                return <Card.Body key={`desc_${index}`}>
                                    {desc}
                                </Card.Body>
                            })}
                        </Card>
                        <Card>
                            <Card.Header>School : {detail.school?.name}</Card.Header>
                            <Card.Body>
                                <h5>Classes</h5>
                                {(detail.classes && detail.classes?.length >= 1) ? detail.classes?.map((cls: SpellInterface, index: number) => {
                                    return <Badge className="m-1">{cls?.name}</Badge>

                                }) : <div>No Class linked</div>}
                                <h5>Sub Classes</h5>
                                {detail.subclasses && detail.subclasses?.length >= 1 ? detail.subclasses?.map((cls: SpellInterface, index: number) => {
                                    return <Badge bg="secondary" className="m-1">{cls?.name}</Badge>

                                }) : <div>No Sub Class linked</div>}
                            </Card.Body>
                        </Card>
                    </>
            }
        </Container>
    )
}
export default SpellDetail;