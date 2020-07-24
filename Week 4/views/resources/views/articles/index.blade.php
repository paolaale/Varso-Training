@extends ('layout')

@section ('content')

    <div id="wrapper">
        <div id="page" class="container">
            @forelse ($articles as $article)
                <div class="content">
                    <div class="title">
                        <h2><a href="{{ route('articles.show', $article->id) }}">{{ $article->title }}</a></h2>
                    </div>
                    <p>
                        <img src="/images/banner.jpg" class="image image-full">
                    </p>
                    {!! $article->excerpt !!}
                </div>
                <br>
                @empty
                    <p>No relevant articles yet</p>
            @endforelse
        </div>
    </div>

@endsection