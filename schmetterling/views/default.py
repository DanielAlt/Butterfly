from pyramid.response import Response
from pyramid.view import view_config

@view_config(route_name='game', renderer='../templates/games/schmetterling.pt')
def game(request):
    return dict(
        request=request,
        project= 'schmetterling'
    )